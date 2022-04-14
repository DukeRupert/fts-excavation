<script>
  const initialize = () => {
    new MNI.Widgets.Member('mni-membership-637789533700920278', {
      member: 8250,
      styleTemplate:
        '#@id{text-align:center;position:relative}#@id .mn-widget-member-name{font-weight:700}#@id .mn-widget-member-logo{max-width:100%}'
    }).create()
  }
</script>

<svelte:head>
  <script
    src="https://puyallupsumnerchamber.chambermaster.com/Content/Script/Member.js"
    type="text/javascript"
    on:load={initialize}></script>
</svelte:head>

<div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
  <div class="flex justify-center items-center">
    <div id="mni-membership-637789533700920278" />
  </div>
</div>
