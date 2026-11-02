import { StickerCard } from '../components/StickerCard'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

export function HomePage() {
  return (
    <>
      <header className="hero">
        <p className="badge">26 届应届 · 可尽快到岗</p>
        <h1>{profile.name}</h1>
        <p className="lead">{profile.title}</p>
        <p className="lead" style={{ fontSize: '1rem', marginTop: '-0.75rem' }}>
          {profile.blurb}
        </p>
        <ul className="hero-stats">
          {profile.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <a className="btn" href={profile.repo} target="_blank" rel="noreferrer">
            开源项目
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            发邮件
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="section" id="experience">
        <div className="section-head">
          <h2>经历</h2>
          <p>{profile.education}</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <StickerCard key={item.id} tone="cool">
              <div className="meta">
                <span className="period">{item.period}</span>
                <span className="badge badge--red">{item.role}</span>
              </div>
              <h3>{item.org}</h3>
              <p>{item.summary}</p>
              {item.highlights?.length ? (
                <ul className="bullet-list">
                  {item.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}
            </StickerCard>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <h2>技能</h2>
          <p>Agent · 具身 · 工程 · 交付</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <StickerCard key={group.id} tone="cool">
              <strong>{group.label}</strong>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </StickerCard>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <h2>项目</h2>
          <p>点开可看实机截图、动图与实验对照</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <StickerCard
              key={project.id}
              tone={project.featured || project.cover ? 'warm' : 'cool'}
              className="project-card"
              to={`/projects/${project.id}`}
            >
              {project.cover ? (
                <div className="project-cover">
                  <img src={project.cover} alt={project.name} loading="lazy" />
                </div>
              ) : (
                <div className="project-cover project-cover--stack">
                  {project.stack.slice(0, 5).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              )}
              {project.featured ? <span className="badge">重点</span> : null}
              <h3>{project.name}</h3>
              <p>{project.tagline}</p>
              <p className="period-line">{project.period}</p>
              <span className="hint">查看详情 →</span>
            </StickerCard>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-head">
          <h2>联系</h2>
          <p>求职方向：技术支持工程师（售前 / 售后）· 可尽快到岗</p>
        </div>
        <StickerCard tone="warm">
          <p style={{ margin: '0 0 0.75rem' }}>
            邮箱：
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p style={{ margin: 0 }}>
            GitHub：
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/af520428
            </a>
          </p>
        </StickerCard>
      </section>
    </>
  )
}
