<!-- AlternatingFeatures.svelte -->
<div class="relative pt-16 pb-32 overflow-hidden">
  <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
  <div class="relative">
    <div
      class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
    >
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-600 to-green-700"
            >
              <!-- Icon: Ruler/Pencil -->
              <svg
                class="h-6 w-6 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                <polyline points="12 8 7 3 3 7 8 12" /> <line x1="7" y1="8" x2="5.5" y2="9.5" />
                <polyline points="16 12 21 17 17 21 12 16" />
                <line x1="16" y1="17" x2="14.5" y2="18.5" /></svg
              >
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
              Local experts, Better results
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Our company serves local homeowners and businesses, by offering fair pricing and
              quality work. Check out some of our recent projects to see how we are making the south
              Puget Sound region better!
            </p>
            <div class="mt-6">
              <a
                href="/projects"
                class="inline-flex bg-gradient-to-r from-teal-600 to-green-700 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-700 hover:to-green-800"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-6">
          <blockquote>
            <div>
              <p class="text-base text-gray-500">
                &ldquo;We had a great experience in working with Frank. He never cut any corners but
                was always mindful of costs so as not to exceed our budget.&rdquo;
              </p>
            </div>
            <footer class="mt-3">
              <div class="flex items-center space-x-3">
                <div class="text-base font-medium text-gray-700">
                  Demetrius S. - Bonney Lake, WA
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/image/fts_backyard.webp"
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-24">
    <div
      class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
    >
      <div
        class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
      >
        <div>
          <div>
            <span
              class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-600 to-green-700"
            >
              <!-- Heroicon name: outline/sparkles -->
              <svg
                class="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" /> <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" /></svg
              >
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
              Getting a job right the first time
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              We pride ourselves on the excellence of our work. A key part of that success is clear
              communication about your goals and constraints. Contact us today to fix a difficult
              problem or turn a dream into reality.
            </p>
            <div class="mt-6">
              <a
                href="/quote"
                class="inline-flex bg-gradient-to-r from-teal-600 to-green-700 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-700 hover:to-green-800"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/image/fts_equipment.webp"
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
</div>
