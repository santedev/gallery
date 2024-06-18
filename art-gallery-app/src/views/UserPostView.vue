<template>
  <div class="grid-wrapper px-4 sm:px-6 lg:px-8 mx-auto">
    <div
      class="form-container flex h-full w-full border border-gray-100 create-new-card"
    >
      <div class="h-full w-full flex justify-center items-center p-4">
        <svg
          viewBox="0 0 50 50"
          height="30%"
          width="30%"
          class="cursor-pointer py-20"
          @click="showNewPostForm = !showNewPostForm"
          v-if="!showNewPostForm"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="white"
            stroke-width="2"
            fill="transparent"
          />
          <line
            x1="25"
            y1="15"
            x2="25"
            y2="35"
            stroke="white"
            stroke-width="2"
          />
          <line
            x1="15"
            y1="25"
            x2="35"
            y2="25"
            stroke="white"
            stroke-width="2"
          />
        </svg>
        <div v-else-if="showNewPostForm" class="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            class="delete ml-auto mb-2 cursor-pointer"
            title="delete"
            @click="showNewPostForm = !showNewPostForm"
          >
            <line
              x1="10"
              y1="10"
              x2="40"
              y2="40"
              stroke="white"
              stroke-width="3"
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
          <form
            class="flex justify-center items-center flex-col"
            action="Submit"
            method="post"
            @submit.prevent="submit"
          >
            <input
              type="text"
              class="shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="author"
              v-model="form.author"
            />
            <input
              type="text"
              class="shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="composition name"
              v-model="form.compositionName"
            />
            <textarea
              type="text"
              class="max-h-32 min-h-16 shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="tell some history behind this artwork"
              v-model="form.tale"
            />
            <input
              type="text"
              class="shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="date when it was made this artwork"
              v-model="form.dateCreated"
            />
            <label
              for="file-upload"
              class="cursor-pointer my-3 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </label>
            <input
              id="file-upload"
              type="file"
              @change="handleFileUpload"
              class="hidden"
              accept="image/png, image/jpeg, image/webp"
            />
            <button
              type="submit"
              class="bg-gray-500 w-full h-fit rounded-xl mb-2 submit"
            >
              post
            </button>
          </form>
          <div class="bar" :class="{ invisible: !uploadingImg }">
            <div class="progress" :style="{ width: `${percentVal}%` }"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative overflow-hidden fade-in"
      v-for="(composition, index) in compositions"
      :key="index"
      :class="{ scale: composition.scale && scaleEvent }"
      v-show="composition.loaded"
    >
      <img
        class="w-full max-w-full h-auto inline-block"
        preload
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
            class="delete icon-bar cursor-pointer"
            title="delete"
            @click="removeComposition(index)"
          >
            <line
              x1="10"
              y1="10"
              x2="40"
              y2="40"
              stroke="white"
              stroke-width="3"
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
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
            fill="white"
            width="40"
            height="40"
            class="edit icon-bar cursor-pointer p-1"
            title="edit"
            @click="composition.edit = !composition.edit"
            version="1.1"
            viewBox="0 0 252.39499 252.39499"
            xml:space="preserve"
            sodipodi:docname="pencil-svgrepo-com.svg"
            inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
          >
            <sodipodi:namedview
              id="namedview18"
              pagecolor="#ffffff"
              bordercolor="#000000"
              borderopacity="0.25"
              inkscape:showpageshadow="2"
              inkscape:pageopacity="0.0"
              inkscape:pagecheckerboard="0"
              inkscape:deskcolor="#d1d1d1"
              inkscape:zoom="0.68625"
              inkscape:cx="400"
              inkscape:cy="258.65209"
              inkscape:window-width="1366"
              inkscape:window-height="745"
              inkscape:window-x="-8"
              inkscape:window-y="-8"
              inkscape:window-maximized="1"
              inkscape:current-layer="g2"
            />
            <g id="g18" transform="translate(0,-54.242)">
              <g id="g2">
                <path
                  d="M 12.809,238.52 0,306.637 68.118,293.828 252.395,109.551 197.086,54.242 Z m 47.981,41.423 -41.992,7.896 7.896,-41.992 170.392,-170.392 34.096,34.096 z"
                  id="path1"
                />
              </g>
            </g>
          </svg>
          <svg
            class="cursor-pointer full-screen-icon"
            title="scale"
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
          class="flex flex-col justify-center items-center h-full gap-3 mb-4"
          v-if="!composition.edit"
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
        <div
          v-else-if="composition.edit"
          class="flex flex-col items-center w-full h-full gap-3 mb-4 overflow-y-auto icon-bar"
        >
          <form
            class="max-w-96 w-full m-auto flex flex-col px-4"
            action="Submit"
            method="post"
            @submit.prevent="postEditedComposition(index)"
          >
            <input
              type="text"
              class="shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="author"
              v-model="composition.author"
            />
            <input
              type="text"
              class="shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="composition name"
              v-model="composition.compositionName"
            />
            <textarea
              type="text"
              class="max-h-32 min-h-16 shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="tell some history behind this artwork"
              v-model="composition.tale"
            />
            <input
              type="text"
              class="shadow appearance-none border rounded w-full p-input text-white mt-3 focus:outline-none focus:shadow-outline"
              placeholder="date when it was made this artwork"
              v-model="composition.dateCreated"
            />
            <button
              type="submit"
              class="bg-gray-500 w-full h-fit rounded-xl submit mt-3"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getDatabase,
  ref as dbRef,
  push,
  set,
  update,
  get,
  remove,
} from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import userDataService from "../services/mainUserData";
import { onMounted, ref } from "vue";

export default {
  data() {
    return {
      form: {
        compositionName: "",
        tale: "",
        imageUrl: "",
        author: "",
        dateCreated: "",
      },
      selectedFile: null,
      percentVal: 0,
      uploadingImg: false,
      scaleEvent: false,
      showNewPostForm: false,
    };
  },
  methods: {
    async postEditedComposition(i) {
      try {
        const composition = this.compositions[i];
        const db = getDatabase();
        const compositionRef = dbRef(
          db,
          `users/${userDataService.getUserUid()}/compositions/${composition.id}`
        );
        const form = {
          compositionName: composition.compositionName,
          imageUrl: composition.imageUrl,
          tale: composition.tale,
          author: composition.author,
          dateCreated: composition.dateCreated,
        };
        await update(compositionRef, form);
        console.log("success");
      } catch (error) {
        console.log(error);
      }
    },
    async removeComposition(i) {
      try {
        const composition = this.compositions[i];
        const db = getDatabase();
        const compositionRef = dbRef(
          db,
          `users/${userDataService.getUserUid()}/compositions/${composition.id}`
        );
        await this.deleteImage(composition.imageUrl);
        await remove(compositionRef);
        this.compositions.splice(i, 1);
        console.log(this.compositions);
        console.log("success");
      } catch (error) {
        console.log(error);
      }
    },
    async deleteImage(imageUrl) {
      try {
        const storage = getStorage();
        const path = decodeURIComponent(imageUrl.split("/o/")[1].split("?")[0]);
        const imageRef = storageRef(storage, path);
        await deleteObject(imageRef);
        console.log("File deleted successfully");
      } catch (error) {
        console.error("Failed to delete file:", error);
      }
    },
    async handleFileUpload(event) {
      const file = event.target.files[0];
      this.selectedFile = file;
      console.log(file);
    },
    debounce(func, time) {
      let timeout;
      return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), time);
      };
    },

    async doSubmit() {
      if (!this.selectedFile) {
        console.error("No file selected!");
        return;
      }
      console.log("lol" + this.selectedFile);
      this.uploadingImg = true;

      const fileName = `${Date.now()}_${this.selectedFile.name}`;

      const storage = getStorage();
      const storageReference = storageRef(storage, "images/" + fileName);
      const uploadTask = uploadBytesResumable(
        storageReference,
        this.selectedFile
      );

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.percentVal = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(this.percentVal);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);

            this.form.imageUrl = downloadURL;

            const db = getDatabase();
            const userRef = dbRef(
              db,
              `users/${userDataService.getUserUid()}/compositions`
            );
            const newCompositionRef = push(userRef);
            const form = {
              compositionName: this.form.compositionName,
              imageUrl: this.form.imageUrl,
              tale: this.form.tale,
              author: this.form.author,
              dateCreated: this.form.dateCreated,
            };
            await set(newCompositionRef, form);
            console.log("Data saved successfully!", newCompositionRef);
            this.compositions.push({
              ...form,
              id: newCompositionRef.key,
              scale: false,
              loaded: false,
            });

            this.form.author = ""
            this.form.compositionName = ""
            this.form.dateCreated = ""
            this.form.imageUrl = ""
            this.form.tale = ""
            this.selectedFile = null
          } catch (error) {
            console.error("Failed to save data:", error);
          } finally {
            this.uploadingImg = false;
          }
        }
      );
    },
    submit() {
      this.debouncedSubmit();
    },
  },
  created() {
    this.debouncedSubmit = this.debounce(this.doSubmit, 300);
  },
  setup() {
    const compositions = ref([]);
    onMounted(async () => {
      const db = getDatabase();
      const userCompositionsRef = dbRef(
        db,
        `users/${userDataService.getUserUid()}/compositions`
      );
      try {
        const userCompositionsSnapshot = await get(userCompositionsRef);
        const userCompositions = userCompositionsSnapshot.val();

        console.log("User Compositions:", userCompositions);

        const userCompositionsArray = userCompositions
          ? Object.entries(userCompositions).map(([key, object]) => {
              return {
                ...object,
                id: key,
                expand: false,
                edit: false,
                loaded: false,
              };
            })
          : [];
        console.log("User Compositions Array:", userCompositionsArray);
        compositions.value = userCompositionsArray;
      } catch (error) {
        console.error("Failed to fetch user compositions:", error);
      }
    });
    return { compositions };
  },
};
</script>

<style scoped>
.bar {
  height: 10px;
  width: 100%;
  background: #80808073;
}
.progress {
  background: #696969;
  height: 100%;
  width: 0%;
}
.uploadPercentage {
  font-size: 24px;
}

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
.relative:hover .icon-bar {
  opacity: 1;
}
.art-card .icon-bar {
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
  max-width: 2200px;
}
.grid-wrapper .relative,
.create-new-card {
  margin-bottom: 0.5rem;
}
button.submit {
  line-height: 100%;
  padding: 12px 12px 15px 12px;
}
.p-input {
  padding: 17px 14px;
}
.form-container {
  break-inside: avoid;
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
