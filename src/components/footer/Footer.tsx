import styles from './footer.module.scss'
 
export function  Footer (){
  
  return (
    <footer className={styles.footer}>
    <p>Designed & Built by Matías Stefanutti</p>
    Inspired on <a href='https://v4.brittanychiang.com/' target="blank"  > Brittany Chiang web site </a>
  </footer>
    );
}
