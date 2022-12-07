import { useEffect, useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

const MUITable = () => {
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const [sentences, setSentences] = useState<number[]>([1, 10]);
  const [words, setWords] = useState<number[]>([1, 10]);
  const [senetenceLength, setSenetenceLength] = useState(1);
  const [text, setText] = useState("");

  const handleChangeSentences = (event: Event, newValue: number | number[]) => {
    setSentences(newValue as number[]);
  };
  const handleChange = (event: Event, newValue: number | number[]) => {
    setWords(newValue as number[]);
  };
  function updateClipboard(newClip: any) {
    navigator.clipboard.writeText(newClip).then(
      () => {
        console.log("Copied!");
      },
      () => {
        console.log("Copy failed!");
      }
    );
  }

  useEffect(() => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: sentences[1],
        min: sentences[0],
      },
      wordsPerSentence: {
        max: words[1],
        min: words[0],
      },
    });
    setText(lorem.generateParagraphs(senetenceLength));
  }, [words, sentences, senetenceLength]);

  return (
    <Grid
      sx={{
        width: "100%",
      }}
    >
      <Grid sx={{ pb: 6 }}>
        <Typography variant="h5" sx={{ pb: 6 }}>
          <Link>Lorem Ipsum Generator</Link>
        </Typography>
        <Typography variant="body2">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on
          meaningfulLorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content content
        </Typography>
      </Grid>
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            width: "95%",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "50px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              Paragraphs
            </Typography>
            <Typography
              sx={{
                width: "70%",
                display: "flex",
                paddingRight: "20px",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Slider
                aria-label="Small steps"
                defaultValue={0}
                onChange={(d) => {
                  console.log(d);
                }}
                step={1}
                marks
                min={0}
                max={20}
                valueLabelDisplay="auto"
              />
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "50px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              Sentences per paragraph
            </Typography>
            <Typography
              sx={{
                width: "70%",
                display: "flex",
                paddingRight: "20px",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={sentences}
                  onChange={handleChangeSentences}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "50px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                border: "none",
              }}
            >
              Words per Sentences
            </Typography>
            <Typography
              sx={{
                width: "70%",
                display: "flex",
                paddingRight: "20px",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={words}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </Typography>
          </Typography>

          <Card
            sx={{
              boxShadow: "none",
              border: "none",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: "40vh",
                maxHeight: "40vh",
                overflowY: "scroll",
                padding: "20px",
                boxShadow: "none",
              }}
            >
              {text}
            </Card>
            <Typography sx={{ pt: 3 }}>
              <Button
                size="large"
                type="submit"
                sx={{ mr: 2 }}
                variant="contained"
                onClick={() => {
                  updateClipboard(text);
                }}
              >
                Copy
              </Button>
            </Typography>
          </Card>
        </Card>
      </Typography>
    </Grid>
  );
};

export default MUITable;
