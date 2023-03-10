import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import useGet from "src/hooks/useGet";
import CircularProgress from "@mui/material/CircularProgress";
import router from "next/router";
import { tagProps } from "src/sharedtypes/tagstypes";

interface SearchProps {
  searchTag: string | undefined;
}

const SearchTag = ({ searchTag }: SearchProps) => {
  const {
    refetch: FetchSearchTag,
    data,
    isFetching,
  } = useGet("searchingtag", `/tags/${searchTag}`);

  useEffect(() => {
    FetchSearchTag();
  }, [searchTag]);

  const handleClicked = (tag: string) => {
    router.push({
      pathname: "/questionbytag",
      query: { searchTag: tag },
    });
  };

  return (
    <>
      {isFetching ? (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
          }}
        >
          <CircularProgress color="inherit" />
        </Typography>
      ) : (
        <Grid
          sx={{
            width: "100%",
            display: "grid",
            gap: "20px",
            textAlign: "left",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            paddingTop: "25px",
          }}
        >
          {data &&
            data?.map((searchTag: tagProps) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 1,
                    border: "1px solid lightgrey",
                    cursor: "pointer",
                    "&:hover": {
                      border: "2px solid lightgrey",
                    },
                  }}
                  onClick={() => handleClicked(searchTag?._id)}
                >
                  <Typography sx={{ widh: "100px" }}>
                    #{searchTag?._id}
                  </Typography>
                </Card>
              );
            })}
        </Grid>
      )}
    </>
  );
};

export default SearchTag;
