<template>
  <div class="">
    <div class="max-w-7xl mx-auto sm:px-1 lg:px-8">
      <div>
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="grid grid-cols-4 my-10 max-w-6xl mx-auto px-10 gap-3">
            <h1 class="font-medium col-span-4">Add Course</h1>
            <div class="col-span-4 flex">
              <h3 class="text-sm w-28 text-cb-100">Course Details</h3>
              <hr class="w-full items-center mt-2 border-cb-40" />
            </div>

            <div class="grid grid-cols-2 col-span-4 gap-5">
              <div>
                <label>Title</label>
                <input
                  type="text"
                  class="w-full rounded-lg border-2 border-sc-40 p-2"
                  placeholder="Title"
                />
              </div>
              <div class="relative">
                <div class="flex"><label>Thumbnails</label></div>

                <div
                  class="flex w-full h-11 rounded-lg border-2 border-sc-40 p-2"
                >
                  <label>
                    <input
                      type="file"
                      class="
                        block
                        w-full
                        text-sm text-themeColor-white
                        file:align-self-end
                        file:py-2
                        file:px-4
                        file:flex
                        file:justify-end
                        file:rounded-full
                        file:border-0
                        file:text-sm
                        file:font-semibold
                        file:bg-rc
                        file:text-themeColor-white
                        hover:file:bg-rc
                      "
                    /><span class="sr-only">Upload</span>
                  </label>
                </div>
              </div>
              <div>
                <label>Start Date</label>
                <input
                  type="date"
                  class="w-full rounded-lg border-2 border-sc-40 p-2"
                />
              </div>
              <div>
                <label>End Date</label>
                <input
                  type="date"
                  class="w-full rounded-lg border-2 border-sc-40 p-2"
                />
              </div>
              <div>
                <label>Caption</label>
                <input
                  type="text"
                  class="w-full h-36 rounded-lg border-2 border-sc-40 p-2"
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  type="textarea"
                  class="w-full h-36 rounded-lg border-2 border-sc-40 p-2"
                />
              </div>
            </div>
            <div class="col-span-2 flex">
              <h3 class="text-sm w-23 text-cb-100">Content</h3>
              <hr class="w-full items-center mt-2 border-cb-40" />
            </div>
            <div class="col-span-2 flex">
              <h3 class="text-sm w-23 text-cb-100">Conten Category</h3>
              <hr class="w-3/4 items-center mt-2 border-cb-40" />
            </div>
            <div class="col-span-2">
              <div class="grid grid-cols-1 gap-3">
                <div>
                  <label>Level</label>
                  <select
                    class="
                      w-full
                      rounded-lg
                      border-2
                      bg-themeColor-white
                      border-sc-40
                      p-2
                    "
                  >
                    <option selected></option>
                  </select>
                </div>
                <div>
                  <label>Categories</label>
                  <select
                    class="
                      w-full
                      rounded-lg
                      bg-themeColor-white
                      border-2 border-sc-40
                      p-2
                    "
                  >
                    <option selected></option>
                  </select>
                </div>
                <div>
                  <label>Competencies by categories</label>
                  <select
                    class="
                      w-full
                      rounded-lg
                      bg-themeColor-white
                      border-2 border-sc-40
                      p-2
                    "
                  >
                    <option selected></option>
                  </select>
                </div>
                <div>
                  <label>Business Domain</label>
                  <select
                    class="
                      w-full
                      rounded-lg
                      bg-themeColor-white
                      border-2 border-sc-40
                      p-2
                    "
                  >
                    <option selected></option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <div class="grid grid-cols-1">
                <span>Privacy</span>
                <div class="flex items-center">
                  <div>
                    <input
                      id="privacy-1"
                      type="radio"
                      value=""
                      name="privacy"
                      class="
                        w-4
                        h-4
                        text-blue-600
                        bg-gray-100
                        border-gray-300
                        focus:ring-blue-500
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800
                        focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600
                      "
                    />
                    <label for="privacy-1" class="ml-2 text-sm font-medium"
                      >Public</label
                    >
                    <p class="text-xs ml-5">Everyone can watch your video</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div>
                    <input
                      checked
                      id="privacy-2"
                      type="radio"
                      value=""
                      name="privacy"
                      class="
                        w-4
                        h-4
                        text-blue-600
                        bg-gray-100
                        border-gray-300
                        focus:ring-blue-500
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800
                        focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600
                      "
                    />
                    <label for="privacy-2" class="ml-2 text-sm font-medium"
                      >Protected
                    </label>
                    <p class="text-xs ml-5">
                      Everyone with link can watch your video
                    </p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div>
                    <input
                      id="privacy-1"
                      type="radio"
                      value=""
                      name="privacy"
                      class="
                        w-4
                        h-4
                        text-blue-600
                        bg-gray-100
                        border-gray-300
                        focus:ring-blue-500
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800
                        focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600
                      "
                    />
                    <label for="privacy-1" class="ml-2 text-sm font-medium"
                      >Private</label
                    >
                    <p class="text-xs ml-5">
                      Only someone with access can watch your video
                    </p>
                  </div>
                </div>
                <span>Sequence</span>
                <div class="flex items-center">
                  <div>
                    <input
                      id="sequence-1"
                      type="radio"
                      value=""
                      name="sequence"
                      class="
                        w-4
                        h-4
                        text-blue-600
                        bg-gray-100
                        border-gray-300
                        focus:ring-blue-500
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800
                        focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600
                      "
                    />
                    <label for="sequence-1" class="ml-2 text-sm font-medium"
                      >Random</label
                    >
                    <p class="text-xs ml-5">
                      User can select content without paying attention to the
                      order of the content. (Course Flow)
                    </p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div>
                    <input
                      checked
                      id="sequence-2"
                      type="radio"
                      value=""
                      name="sequence"
                      class="
                        w-4
                        h-4
                        text-blue-600
                        bg-gray-100
                        border-gray-300
                        focus:ring-blue-500
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800
                        focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600
                      "
                    />
                    <label for="sequence-2" class="ml-2 text-sm font-medium"
                      >Sequence
                    </label>
                    <p class="text-xs ml-5">
                      User are required to follow the course flow.
                    </p>
                  </div>
                </div>
                <span>Certified</span>
                <div class="flex items-center">
                  <div>
                    <input
                      id="certified-1"
                      type="radio"
                      value=""
                      name="certified"
                      class="
                        w-4
                        h-4
                        text-blue-600
                        bg-gray-100
                        border-gray-300
                        focus:ring-blue-500
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800
                        focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600
                      "
                    />
                    <label for="certified-1" class="ml-2 text-sm font-medium"
                      >Certificate</label
                    >
                    <p class="text-xs ml-5">Everyone can watch your video</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <div>
                    <input
                      checked
                      id="certified-2"
                      type="radio"
                      value=""
                      name="certified"
                      class="
                        w-4
                        h-4
                        text-blue-600
                        bg-gray-100
                        border-gray-300
                        focus:ring-blue-500
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800
                        focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600
                      "
                    />
                    <label for="certified-2" class="ml-2 text-sm font-medium"
                      >No Certificate
                    </label>
                    <p class="text-xs ml-5">
                      Everyone wiht link can watch your video
                    </p>
                  </div>
                </div>
                <div>
                  <label>Status</label>
                  <select
                    class="
                      w-full
                      rounded-lg
                      border-2
                      bg-themeColor-white
                      border-sc-40
                      p-2
                    "
                  >
                    <option selected></option>
                  </select>
                </div>
                <div>
                  <label>Organization</label>
                  <select
                    class="
                      w-full
                      rounded-lg
                      bg-themeColor-white
                      border-2 border-sc-40
                      p-2
                    "
                  >
                    <option selected></option>
                  </select>
                </div>
                <div>
                  <label
                    >Learning Hour
                    <span class="text-sm text-sc-40">(on minutes)</span></label
                  >
                  <select
                    class="
                      w-full
                      rounded-lg
                      bg-themeColor-white
                      border-2 border-sc-40
                      p-2
                    "
                  >
                    <option selected></option>
                  </select>
                </div>
              </div>
            </div>
            <hr class="col-span-4 w-full items-center px-2 border-cb-40" />
            <div class="flex col-span-4 justify-end">
              <div class="grid grid-cols-2 gap-2">
                <button
                  type="submit"
                  class="
                    font-medium
                    border-2
                    p-1
                    rounded-lg
                    border-rc
                    text-rc
                    focus:bg-rc focus:text-themeColor-white
                    w-24
                  "
                >
                  Add
                </button>
                <button
                  class="
                    font-medium
                    border-2
                    p-1
                    rounded-lg
                    border-rc
                    text-rc
                    focus:bg-rc focus:text-themeColor-white
                    w-24
                  "
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>