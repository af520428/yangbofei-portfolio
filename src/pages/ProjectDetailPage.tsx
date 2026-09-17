import { Link, useParams } from 'react-router-dom'
import { StickerCard } from '../components/StickerCard'
import { getProject } from '../data/projects'

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = id ? getProject(id) : undefined

  if (!project) {
    return (
      <div className="not-found">
        <h1>未找到该项目</h1>
        <Link to="/" className="detail-back">
          ← 返回首页
        </Link>
      </div>
    )
  }

  return (
    <article>
      <Link to="/" className="detail-back">
        ← 返回首页
      </Link>
      <header className="detail-hero">
        <span className="badge">项目详情</span>
        <h1>{project.name}</h1>
        <p>{project.tagline}</p>
        <div className="detail-meta">
          <span>{project.period}</span>
          <span>{project.role}</span>
        </div>
      </header>

      {project.cover ? (
        <figure className="detail-hero-fig">
          <img src={project.cover} alt={project.name} />
        </figure>
      ) : null}

      <div className="detail-body">
        <StickerCard tone="cool">
          <h2>问题</h2>
          <p>{project.problem}</p>
        </StickerCard>
        <StickerCard tone="warm">
          <h2>做法</h2>
          <p>{project.approach}</p>
        </StickerCard>
        <StickerCard tone="cool">
          <h2>结果</h2>
          <p>{project.result}</p>
        </StickerCard>

        {project.images?.length ? (
          <StickerCard>
            <h2>可视化</h2>
            <div className="gallery">
              {project.images.map((image) => (
                <figure key={image.src} className="gallery-item">
                  <img src={image.src} alt={image.caption} loading="lazy" />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </StickerCard>
        ) : null}

        <StickerCard>
          <h2>技术栈</h2>
          <ul className="tag-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.localPath ? (
            <p style={{ margin: '1rem 0 0', fontSize: '0.9rem', color: '#5c574f' }}>
              本地工程：<code>{project.localPath}</code>
            </p>
          ) : null}
          {project.links?.length ? (
            <ul className="tag-list" style={{ marginTop: '1rem' }}>
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </StickerCard>
      </div>
    </article>
  )
}
