<template>
  <div
    class="bg-neutral-800 rounded-lg p-2 flex align-middle justify-between w-11/12 sm:w-fit mx-auto"
  >
    <form
      class="flex justify-between w-full items-center"
      action="Submit"
      method="post"
      @submit.prevent="searchCompositions"
    >
      <input
        class="bg-transparent text-neutral-300 w-full max-w-full sm:min-w-96 p-3 m-0 outline-none"
        type="text"
        v-model="searchInput"
        placeholder="search art or authors..."
      />
      <button class="rounded-md bg-neutral-600 h-full" type="submit">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12.2036L2 2L4.25 12.2036M22 12.2036L2 22L4.25 12.2036M22 12.2036H4.25"
            stroke-width="2"
          />
        </svg>
      </button>
    </form>
  </div>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
    <div class="grid-wrapper">
      <div
        class="relative overflow-hidden fade-in"
        v-for="(composition, index) in compositions"
        :key="index"
        :class="{ scale: composition.scale && scaleEvent }"
        v-show="composition.loaded"
      >
        <img
          class="w-full max-w-full h-auto inline-block"
          :src="composition.imageUrl"
          :alt="composition.tale.slice(0, 50)"
          @load="composition.loaded = true"
        />
        <div
          class="flex flex-col items-center art-card absolute w-full h-full bg-neutral-950"
        >
          <div class="flex justify-between pt-1 px-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 50 50"
              class="arrow"
            >
              <polygon points="25,10 10,40 40,40" fill="white" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 50 50"
              class="prohibit cursor-pointer"
              v-if="composition.scale && scaleEvent"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="white"
                stroke-width="3"
                fill="none"
              />
              <line
                x1="40"
                y1="10"
                x2="10"
                y2="40"
                stroke="white"
                stroke-width="3"
              />
            </svg>
            <svg
              class="cursor-pointer full-screen-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 50 50"
              @click="scale(index)"
            >
              <polygon points="10,10 20,10 10,20" fill="white" />
              <polygon points="40,10 30,10 40,20" fill="white" />
              <polygon points="10,40 20,40 10,30" fill="white" />
              <polygon points="40,40 30,40 40,30" fill="white" />
            </svg>
          </div>
          <div
            class="flex flex-col justify-center items-center h-full gap-3 mb-4 composition-container"
          >
            <h2 class="text-center px-3 text-3xl font-bold">
              {{
                composition.compositionName.length > 10 && !composition.scale
                  ? `${composition.compositionName.slice(0, 10)}...`
                  : composition.compositionName
              }}
              <span class="text-center text-neutral-400 text-lg font-bold">{{
                `by ${
                  composition.author.length > 10 && !composition.scale
                    ? `${composition.author.slice(0, 10)}...`
                    : composition.author
                }`
              }}</span>
            </h2>
            <p class="text-center max-w-xl px-3">
              {{
                composition.tale.length > 80 && !composition.scale
                  ? `${composition.tale.slice(0, 80)}...`
                  : composition.tale
              }}
            </p>
            <span class="text-center text-neutral-400">{{
              composition.dateCreated
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getDatabase,
  ref as dbRef,
  get,
  query,
  limitToFirst,
  startAfter,
  orderByKey,
  equalTo,
  orderByChild,
} from "firebase/database";
import { onBeforeUnmount, onMounted, ref } from "vue";
import compositionsFetched from "../data/compositions";
import Fuse from "fuse.js";

const initializeFuse = (data) => {
  const options = {
    keys: ["author", "name"], // Fields to search in
    threshold: 0.3, // Adjust based on the desired level of match fuzziness
  };
  return new Fuse(data, options);
};

const initialCompositions = Array.isArray(compositionsFetched)
  ? compositionsFetched.map((c) => ({
      imageUrl: c.imageUrl,
      author: c.author,
      compositionName: c.compositionName,
      tale: c.tale,
      dateCreated: c.dateCreated,
      scale: false,
      loaded: false
    }))
  : [];

const fuseList = initializeFuse(initialCompositions);

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply("", args), wait);
  };
};

const searchInput = ref("");
const scaleEvent = ref(false);
let compositions = ref([]);
let usersId = ref([]);
let cIndexCompArr = 0;
let cQueryCompsArr = [];

const scale = (index) => {
  if (scaleEvent.value && compositions.value[index].scale) {
    compositions.value[index].scale = !compositions.value[index].scale;
    scaleEvent.value = !scaleEvent.value;
  } else if (!scaleEvent.value && !compositions.value[index].scale) {
    compositions.value[index].scale = !compositions.value[index].scale;
    scaleEvent.value = !scaleEvent.value;
  }
};
let lastAuthor = { name: "", query: false };
const authorsPerFetch = 1;
let isFetchCompositions = false;
const fetchCompositions = async (search) => {
  if (isFetchCompositions) return;
  isFetchCompositions = true;
  if (search) {
    lastAuthor.name = "";
    usersId.value = [];
  }
  try {
    const db = getDatabase();
    const usersRef = dbRef(db, "users");

    let mainQuery;
    if (searchInput.value.length > 0) {
      lastAuthor.query = true;
      mainQuery =
        lastAuthor?.name?.length > 0
          ? query(usersRef, orderByKey(), startAfter(lastAuthor.name))
          : query(usersRef, orderByKey());
    } else {
      lastAuthor.query = false;
      mainQuery =
        lastAuthor?.name?.length > 0
          ? query(
              usersRef,
              orderByKey(),
              startAfter(lastAuthor.name),
              limitToFirst(authorsPerFetch)
            )
          : query(usersRef, orderByKey(), limitToFirst(authorsPerFetch));
    }
    const authorsSnapshot = await get(mainQuery);
    const users = [];

    authorsSnapshot.forEach((childSnapshot) => {
      users.push(childSnapshot.key);
    });

    const artworks = [];
    const searchInputInstance = searchInput.value.trim();
    if (users && lastAuthor.name === users[users?.length - 1]) {
      lastAuthor.name = "";
    } else if (users) {
      lastAuthor.name = users[users?.length - 1];
    }
    if (users && users?.length > 0) {
      for await (const userId of users) {
        if (usersId.value.includes(userId)) {
          break;
        } else {
          usersId.value.push(userId);
        }
        const userCompositionsRef = dbRef(db, `users/${userId}/compositions`);

        const userNamesCompositionsQuery =
          searchInputInstance.length > 0
            ? query(
                userCompositionsRef,
                orderByChild("compositionName"),
                equalTo(searchInputInstance)
              )
            : query(userCompositionsRef);
        const userNamesCompositionsSnapshot = await get(
          userNamesCompositionsQuery
        );
        const collectionCompositionsKey = [];
        userNamesCompositionsSnapshot.forEach((childSnapshot) => {
          collectionCompositionsKey.push(childSnapshot.key);
          artworks.push({
            ...childSnapshot.val(),
            scale: false,
            loaded: false,
          });
        });
        const userAuthorsCompositionsQuery =
          searchInputInstance.length > 0
            ? query(
                userCompositionsRef,
                orderByChild("author"),
                equalTo(searchInputInstance)
              )
            : query(userCompositionsRef);
        const userAuthorsCompositionsSnapshot = await get(
          userAuthorsCompositionsQuery
        );
        userAuthorsCompositionsSnapshot.forEach((childSnapshot) => {
          if (collectionCompositionsKey.includes(childSnapshot.key)) {
            return;
          }
          artworks.push({
            ...childSnapshot.val(),
            scale: false,
            loaded: false,
          });
        });
      }
    }
    isFetchCompositions = false;
    return artworks || [];
  } catch (error) {
    console.error("Failed to fetch user compositions:", error);
    isFetchCompositions = false;
    return [];
  }
};
const handleScroll = debounce(async () => {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  const totalHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;

  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const distanceFromBottom = totalHeight - (scrollPosition + windowHeight);

  if (distanceFromBottom < 50) {
    if (Array.isArray(cQueryCompsArr) && cQueryCompsArr?.length > 0) {
      const compositionArr = cQueryCompsArr.slice(
        cIndexCompArr,
        cIndexCompArr + 20
      );
      cIndexCompArr += 20;
      compositions.value.push(...compositionArr);
    } else {
      const compositionArr = initialCompositions.slice(
        cIndexCompArr,
        cIndexCompArr + 20
      );
      cIndexCompArr += 20;
      compositions.value.push(...compositionArr);
    }
    const newCompositions = (await fetchCompositions()) || [];
    if (newCompositions?.length > 0) {
      compositions.value.push(...newCompositions);
    }
  }
}, 300);
/*
const searchHarvard = (() => {
  const artworksArr = [];
  let timeout;
  let page = 0;
  let currentInput = "";
  return async () => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      const myKey = "a37e525a-7973-4a89-9648";
      let input = encodeURIComponent(searchInput.value);
      if (input === currentInput) {
        page++;
      } else {
        page = 0;
        currentInput = input;
      }
      console.log(page);
      const artWorks = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${myKey}&person=${input}&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      if (artWorks.ok) {
        const response = await artWorks.json();
        const arr = response.records.map((r) => {
          return {
            compositionName: r.title,
            author: r.people.map((e) => e.displayname),
            tale: r.description || "",
            harvardPage: r.url,
            dateCreated: r.dated || "",
          };
        });
        arr.forEach((a) => {
          if (
            !artworksArr.some((e) => e.compositionName === a.compositionName)
          ) {
            artworksArr.push(a);
          }
        });
        console.log(artworksArr);
      }
    }, 600);
  };
})();
*/
const searchCompositions = debounce(async () => {
  const input = searchInput?.value?.toLowerCase().trim();
  const search = true;
  if (searchInput.value.length <= 0) {
    usersId.value = [];
    compositions.value = [];
    cIndexCompArr = 0;
    cQueryCompsArr = [];
    lastAuthor.name = "";
    const compositionArr = initialCompositions.slice(
      cIndexCompArr,
      cIndexCompArr + 20
    );
    cIndexCompArr += 20;
    compositions.value.push(...compositionArr);
    const newCompositions = (await fetchCompositions(search)) || [];
    compositions.value.push(...newCompositions);
  } else {
    cIndexCompArr = 0;
    compositions.value = [];
    cQueryCompsArr = [];
    const filteredCompsArr = fuseList
      .search(input)
      .map((result) => result.item);
    cQueryCompsArr.push(...filteredCompsArr);
    const compositionArr = cQueryCompsArr.slice(
      cIndexCompArr,
      cIndexCompArr + 20
    );
    cIndexCompArr += 20;
    compositions.value.push(...compositionArr);
    const newCompositions = (await fetchCompositions(search)) || [];
    if (newCompositions && newCompositions?.length > 0) {
      compositions.value.push(...newCompositions);
    }
  }
}, 300);

onMounted(async () => {
  const compositionArr = initialCompositions.slice(
    cIndexCompArr,
    cIndexCompArr + 20
  );
  cIndexCompArr += 20;
  compositions.value.push(...compositionArr);
  const newCompositions = (await fetchCompositions()) || [];
  if (newCompositions?.length > 0) compositions.value.push(...newCompositions);
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scale {
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 70vw;
  max-height: 100vh;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.6);
}
.fade-in {
  animation: fadeIn 0.2s ease-in-out;
}
.relative:hover .art-card {
  transform: translateY(0);
  background: #0a0a0ae9;
}
.relative:hover .art-card .arrow {
  transform: rotate(180deg);
}
.relative:hover .art-card .prohibit,
.relative:hover .art-card .full-screen-icon,
.relative:hover .composition-container {
  opacity: 1;
}
.composition-container,
.art-card .prohibit,
.art-card .full-screen-icon {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.art-card .arrow {
  transform: rotate(0);
  transition: transform 0.5s ease-in-out;
}
.art-card {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(calc(100% - 50px));
  background: #0a0a0a70;
  transition: transform 0.5s ease-in-out, background 0.2s ease-in-out;
}
.grid-wrapper {
  columns: 5 320px;
  column-gap: 0.5rem;
}
.grid-wrapper .relative {
  margin-bottom: 0.5rem;
}
svg path {
  stroke: #fff;
}
form button {
  padding: 0.1875rem 0.625rem 0.125rem 0.9375rem;
}
@media (max-width: 768px) {
  .scale {
    width: 90vw;
    max-width: 90vw;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
