import { useState } from 'react';
import { useSnackbar } from 'notistack';

import { AppInfoSection, ShortenUrlForm, UrlList } from '../../components';

const Home = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [urlList, setUrlList] = useState([]);

    const shortenUrl = async (url) => {
        const controller = new AbortController();
        try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`,
                { signal: controller.signal });
            if (res?.status >= 400) {
                enqueueSnackbar("Sorry, this URL can't be shortened",
                    { variant: "error" });
                return;
            }
            const jsonRes = await res.json();
            if (jsonRes?.ok) {
                setUrlList(urlList => ([
                    ...urlList, {
                        longUrl: url,
                        shortUrl: jsonRes?.result?.full_short_link
                    }
                ]));
            }
        } catch (err) {
            enqueueSnackbar("Sorry, this URL can't be shortened",
                { variant: "error" });
        } finally {
            controller.abort();
        };
    };

    const handleSubmit = url => {
        const urlIndex = urlList.findIndex(o => o?.longUrl === url);
        if (urlIndex === -1) shortenUrl(url);
        else
            enqueueSnackbar(
                "Sorry, this URL already seems shortened, please check the list",
                { variant: "warning" });
    };

    return (
        <>
            <AppInfoSection />
            <ShortenUrlForm onSubmit={handleSubmit} />
            <UrlList data={urlList} />
        </>
    );
};

export default Home;
