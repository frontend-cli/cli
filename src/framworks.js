const available = ["vue", "react", "next", "svelte", "angular", "nuxt"];

const commands = {
  vue: "npx vue create",
  react: "npx create-next-app ",
  next: "npx create-next-app ",
  angular: "npx ng new angular-tour-of-heroes",
  nuxt: "npx nuxi init",
  svelte: "npm create svelte@latest",
};

module.exports = {
  available,
  commands,
};
