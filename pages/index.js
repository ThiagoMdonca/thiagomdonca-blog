import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'
import Footer from '../components/Footer'

const SubTitle = styled.h2`
 background-color: var(--primary);
 color: white;
 display: inline-block;
 padding: 5px;
`
export default function Home(props) {
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} />
        <Link href="/sobre">
          <a>
            <h1>Thiago blog</h1>
          </a>
        </Link>
      </header>
      <section className="postContainer">
        <SubTitle>Posts</SubTitle>
        <article className="postContainer_post">
          <a href="/" >
            Alura js 01 blog;
          </a>
          <p>
            O que aprendi com o  CDFTV e a Alura nesse episódio show!
          </p>
        </article>
      </section>
      <section className="postContainer">
        <SubTitle> Repositorios Favoritos</SubTitle>
        {props.repos.map((project, key) => (
          <article key={key} className="postContainer__post">
            <a href={`${props.url_github}${props.username}/${project.repo}`} target='blank' >
              {project.repo}
            </a>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  )

}

export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/ThiagoMdonca')
    .then(res => res.json());

  const repos = await fetch('https://gh-pinned-repos.now.sh/?username=ThiagoMdonca')
    .then(res => res.json());
  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      username: githubResponse.login,
      repos,
    }
  }
}