import { PageTitle } from "../../components/PageTitle";
import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import { Banner } from "./Banner";
import { MovieType } from "./MovieType";
import { TopMovie } from "./TopMovie";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [uploadData, setUploadData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowData } = await nowPlaying();
        setNowData(nowData);
        const { results: popData } = await popular();
        setPopData(popData);
        const { results: topData } = await topRated();
        setTopData(topData);
        const { results: uploadData } = await upcoming();
        setUploadData(uploadData);
        setIsLoading(false);
      } catch (error) {
        console.log("error : " + error);
      }
    })();
  }, []);

  // console.log(topData);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          {nowData && (
            <>
              <PageTitle titleName="HOME" />ç
              <Banner data={nowData[0]} />
              <MovieType titleName="인기 영화" data={popData} />
              <MovieType titleName="현재 상영 영화" data={nowData} />
              <TopMovie titleName="TOP 20 영화" data={topData} />
              <MovieType titleName="개봉 예정 영화" data={uploadData} />
            </>
          )}
        </div>
      )}
    </>
  );
};
