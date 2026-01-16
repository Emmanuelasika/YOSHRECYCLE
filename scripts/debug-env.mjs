console.log("Environment check:");
console.log("SANITY_API_WRITE_TOKEN:", !!process.env.SANITY_API_WRITE_TOKEN);
console.log("SANITY_ACCESS_TOKEN:", !!process.env.SANITY_ACCESS_TOKEN);
console.log("SANITY_TOKEN:", !!process.env.SANITY_TOKEN);
console.log("All keys starting with SANITY:", Object.keys(process.env).filter(k => k.startsWith('SANITY')));
