import React, { useState } from 'react'
import style from './index.less'
import isConnect from '@/library/isConnect'
import Logo from './logo.jpg'

export interface IUser {
  name: string
  id: string
}
export const Home = (props: any) => {
  const { initialData } = props
  const [user, setUser] = useState<IUser>(initialData)
  const handleClick = () => {
    alert('handleClick')
  }

  return (
    <div className="container">
      <div>
        <img src={Logo} alt="" />
        <h1 className="title">noov for ssr</h1>
        <div className="links">
          <a
            href="https://art-design-ui.github.io/noov.js/"
            target="_blank"
            rel="noopener noreferrer"
            className="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/art-design-ui/noov.js"
            target="_blank"
            rel="noopener noreferrer"
            className="button--grey"
          >
            5 GitHub
          </a>
        </div>
        <div
          role="button"
          className="button--green click-btn"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          点一点
        </div>
        <span className="button--green click-btn">作者：{user.name}</span>
        <span className="button--green click-btn">ID：{user.id}</span>
      </div>
    </div>
  )
}
Home.asyncData = ({ store }: any) => {
  // 模拟异步请求
  const data = {
    name: 'vnues',
    id: '@1213'
  }
  // TODO 这里改动 服务端没有做更新
  store.dispatch.home.setUser(data)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}

const mapStateToProps = (state: any) => ({
  home: state.home
})

const mapDispatchToProps = () => ({})

export default isConnect(
  {
    css: style,
    mapStateToProps,
    mapDispatchToProps
  },
  Home
)
