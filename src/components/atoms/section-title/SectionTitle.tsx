import { Icon } from "../../icon/Icon";
import styles from './section-title.module.scss'


 
export function  SectionTitle ({
  children,
}: {
  children: string
}){
  
  return (  <h2 className={styles.sectionTitle} id='about'> <Icon icon='paperPlane' size='medium'></Icon> &nbsp; {children}</h2>);
}
