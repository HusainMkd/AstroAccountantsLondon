const hero = new Proxy({"src":"/_astro/hero.9Pvf-M2C.png","width":1600,"height":939,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

export { hero as default };
