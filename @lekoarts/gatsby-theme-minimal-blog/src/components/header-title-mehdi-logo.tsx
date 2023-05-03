/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link to="/">
    <img
      src="/logo.png"
      alt="Logo"
      style={{ height: "80px", width: "auto", maxWidth: "100%" }}
    />
  </Link>
  )
}

export default HeaderTitle
