import s from './About.module.scss';
import sc from '../../common/styles/Common.module.scss';
import { Experience } from './Experience/Experience';
import { data } from '../../common/data/data';
import { Title } from '../Title/Title';
import { Skills } from './Skill/Skills';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { HomeButton } from '../Home/HomeMobileButton/HomeButton';
import { MyButton } from '../MyButton/MyButton';
import { aboutList } from './data';

type PropsType = {
  homeCallback: () => void;
};

export const About = ({ homeCallback }: PropsType) => {
  return (
    <div className={sc.container}>
      <HomeButton onClickHomeHandler={homeCallback} />
      <div className={s.wrapper}>
        <Title
          title={'ABOUT'}
          specialText={'ME'}
          aboutText={'I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO'}
        />
        <div className={s.main}>
          <div className={s.myPhoto} />
          <div className={s.aboutMe}>
            <div className={s.dataList}>
              {aboutList.map(item => {
                return (
                  <div key={item.id} className={s.dataBlock}>
                    <div className={s.dataContainer}>
                      <span className={s.dataName}>{item.title}:</span>
                      <span className={s.dataValue}>
                        {item.link ? (
                          <a rel='noreferrer' href={item.link} target='_blank'>
                            {item.text}
                          </a>
                        ) : (
                          item.text
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={s.btnWrapper}>
              <a href='/Portfolio-2.0/CV.pdf' download='CV.pdf'>
                <MyButton icon={faDownload} title='Download CV' />
              </a>
            </div>
          </div>
        </div>

        <hr className={s.lineDelimiter} />
        <div className={s.experience}>
          <div className={s.blockExp}>
            <h2 className={s.chapterTitle}>EXPERIENCE</h2>
            <div className={s.works}>
              {data.works.map(work => (
                <Experience key={work.id} work={work} />
              ))}
            </div>
          </div>

          <div className={s.blockExp}>
            <h2 className={s.chapterTitle}>EDUCATION</h2>
            <div className={s.works}>
              {data.education.map(education => (
                <Experience key={education.id} educations={education} />
              ))}
            </div>
          </div>
        </div>

        <div className={s.skills}>
          <h2 className={s.chapterTitle}>SKILLS</h2>
          <Skills skills={data.skills} />
        </div>
      </div>
    </div>
  );
};
