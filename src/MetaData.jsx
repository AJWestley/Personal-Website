import { Helmet } from "react-helmet";

export function OGTags() {
    return (
        <Helmet>
            <meta name="og:title" content="AJ Westley"/>
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="AJ Westley" />
            <meta property="og:url" content="https://ajwestley.me/home" />
            <meta name="og:image" content="https://live.staticflickr.com/65535/53483481862_706d057b51_h.jpg"/>
            <meta property="og:image:type" content="image/jpg"/>
            <meta property="og:image:width" content="1600"/>
            <meta property="og:image:height" content="585"/>
        </Helmet>
    )
}