import { Helmet } from "react-helmet";

export function OGTags() {
    return (
        <Helmet>
            <meta name="og:title" content="AJ Westley"/>
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="AJ Westley" />
            <meta property="og:url" content="https://ajwestley.me/" />
            <meta name="og:image" content="./assets/images/og_banner.png"/>
            <meta property="og:image:type" content="image/jpeg"/>
            <meta property="og:image:width" content="1600"/>
            <meta property="og:image:height" content="585"/>
        </Helmet>
    )
}