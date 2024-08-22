import styles from "./style.module.css";
export function ProviderGlsl() {
  return <div id="renderingCanva" className={styles.providerGlsl}></div>;
}
export { default as ClientContainerGlsl } from "./clientContainerGlsl";
export { default as ClientGlsl } from "./clientGlsl";
