<!-- ContactForm.svelte -->
<script>
  import {createForm} from 'felte'

  const {form} = createForm({
    onSubmit: (values) => {
      // ...
    }
  })
</script>

<form use:form class="space-y-8 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200">
    <div class="pt-8">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Contact Information</h3>
        <p class="mt-1 text-sm text-gray-500">How would you like us to follow up with you?</p>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium text-gray-700">
            First name
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              placeholder="Malcom"
              class="shadow-sm focus:ring-breaker-bay-500 focus:border-breaker-bay-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium text-gray-700"> Last name </label>
          <div class="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              placeholder="Reynolds"
              class="shadow-sm focus:ring-breaker-bay-500 focus:border-breaker-bay-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
          <div class="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="browncoat@gmail.com"
              class="shadow-sm focus:ring-breaker-bay-500 focus:border-breaker-bay-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="phone" class="block text-sm font-medium text-gray-700"> Phone </label>
          <div class="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autocomplete="tel"
              placeholder="253-123-4567"
              class="shadow-sm focus:ring-breaker-bay-500 focus:border-breaker-bay-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="sm:col-span-3 hidden">
          <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
          <div class="mt-1">
            <input
              type="text"
              name="password"
              id="password"
              autocomplete="password"
              class="shadow-sm focus:ring-breaker-bay-500 focus:border-breaker-bay-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div class="pt-8">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Job Information</h3>
          <p class="mt-1 text-sm text-gray-500">Where is the job site and what do you need done?</p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="location" class="block text-sm font-medium text-gray-700">
              Job Location
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Puyallup"
                class="shadow-sm focus:ring-breaker-bay-500 focus:border-breaker-bay-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="location" class="block text-sm font-medium text-gray-700">Service</label>
            <select
              id="service"
              name="service"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-breaker-bay-500 focus:border-breaker-bay-500 sm:text-sm rounded-md"
            >
              <option selected>Site Preparation</option>
              <option>Drainage</option>
              <option>Utility Extension</option>
              <option>Stack Stone Wall</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-5">
    <div class="flex justify-end">
      <button
        type="submit"
        class="ml-3 inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-breaker-bay-500 to-spectra-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-breaker-bay-500 hover:from-breaker-bay-500 hover:to-spectra-600"
        >Send</button
      >
    </div>
  </div>
</form>
