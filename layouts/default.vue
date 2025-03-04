<template>
  <div class="flex flex-row min-h-screen">
    <Sidebar />
    <div class="h-screen w-full overflow-scroll">
      <slot />
    </div>
    <BookFlyout>
      <BookDetails></BookDetails>
    </BookFlyout>
    <Modal id="account" title="Your Account">
      <Account />
    </Modal>
  </div>
</template>
