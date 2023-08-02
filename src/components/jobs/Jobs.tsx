"use client"
import {useState, useEffect, useRef} from 'react'
import styles from './jobs.module.scss'
import { getJobs } from '@/src/infrastructure/JobRepository';


export default function Jobs() {
  
  const jobsData=getJobs()
        
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(0);
  const tabs = useRef([]);
  // const revealContainer = useRef(null);
  // const prefersReducedMotion = usePrefersReducedMotion();

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      // tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }

  };

    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [tabFocus]);
    useEffect(() => 
      document.documentElement.style.setProperty(`--activeTabId`, activeTabId as any)
    , [activeTabId]);

  return (
    <section className={styles.jobSection }>
        <h2 id='jobs'> Where I’ve Worked</h2>
        <div className={styles.inner }>
          <div className={styles.tabList }>
          {jobsData && jobsData.map((e, i) => {
              const  company  = e.company;
              return (
                <button className={activeTabId===i ? styles.tabButtonActive : styles.tabButton }
                  key={e.id}
                  onClick={() => setActiveTabId(i)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? 0 : -1}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}>
                  <span>{company}</span>
                </button>
              );
            })}
            <div className={styles.highlight} />
          </div>
          <div className={ styles.tabPanels }>
          {jobsData &&
            jobsData.map((e, i) => {
              const { title, companyWebSite, company, timeRange, itemsDescriptions, usedSkills } = e;

              return (
                <div className={ styles.tabPanel }
                    key={title}
                    id={`panel-${i}`}
                    role="tabpanel"
                    // tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                      <h4>
                        <span>{title}</span>
                        {
                          company &&
                          <span className="styles.company">
                            &nbsp;@&nbsp;
                            <a href={companyWebSite} >
                              {company}
                            </a>
                          </span>
                        }
                      </h4>
                      <p className="styles.timeRange">{timeRange}</p>
                      <ul> 
                        {itemsDescriptions && itemsDescriptions.map(i => {
                          return (
                            <li key={i.name}>{i.name}</li>
                          )
                        }
                        )}
                      </ul>
                      <ul className={styles.skillsList}> 
                        {usedSkills && usedSkills.map(skill => {
                          return (
                            <li key={skill.name} >{skill.name}</li>
                          )
                        }
                        )}
                      </ul>
                  </div>
              );
            })}
          </div>
        </div>
  </section>
  )
}
