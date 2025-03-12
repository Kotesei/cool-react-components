const modules = import.meta.glob("./components/*/*.jsx", { eager: true });

const Coolponents = {};

Object.entries(modules).forEach(([path, module]) => {
  const name = path.split("/")[2];
  Coolponents[name] = module.default;
});

export default Coolponents;
