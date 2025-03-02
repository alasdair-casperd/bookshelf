<template>
  <div class="grid grid-cols-2 min-h-screen w-full">
    <div class="bg-slate-200 flex flex-row justify-end">
      <BookScrollerGrid />
    </div>
    <div class="bg-slate-100 flex flex-col justify-center items-center">
      <div class="max-w-96 w-full">
        <h1 class="text-3xl text-center font-bold mb-12">
          Welcome to Bookshelf
        </h1>
        <form>
          <div class="mb-4">
            <label for="email">Email or Username</label>
            <input type="email" id="email" placeholder="name@domain.com" />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙ ∙"
            />
          </div>
          <button type="submit" class="mt-6">Sign In</button>
          <div class="text-center mt-4 text-slate-500">
            Create a New Account
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
