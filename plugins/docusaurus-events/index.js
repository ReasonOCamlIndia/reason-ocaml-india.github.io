export default async function myPlugin(context, options) {
  return {
    name: 'docusaurus-events',
    async loadContent() {
      if (!options.src) {
	
      }
    },
    async contentLoaded({content, actions}) {
      console.log("---", content, actions);
      /* ... */
    },
    /* other lifecycle API */
  };
}

