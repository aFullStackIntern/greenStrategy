import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import banner from "@/public/assets/contact.png";

const ContactSection = () => {
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (newPhone) => {
      setPhone(newPhone);
    };
  return (
    <>
      {/* <Stack>
        <Box
          sx={{
            backgroundImage: `url('/assets/contact.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px", // You can adjust this to fit your design
          }}
        ></Box>
      </Stack> */}
      <Stack>
        <Box
          sx={{
            position: "relative", // Make the Box relative to position the text
            backgroundImage: `url('/assets/contact.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px", // Adjust height as needed
          }}
        >
          {/* Black overlay with opacity */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Black overlay
              zIndex: 1, // Ensure overlay appears over the image
            }}
          ></Box>

          {/* Text on the image */}
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "15%",
              transform: "translate(-50%, -50%)", // Center the text
              color: "#fff",
              zIndex: 2, // Ensure text appears above the overlay
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get in Touch
          </Typography>
          <Box
            sx={{
              content: "''",
              width: "2px",
              height: "100px",
              backgroundColor: "#fff",
              zIndex: 2,
              position: "absolute",
              top: "50%",
              left: "28%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "41%",
              right: "20%",
              color: "#fff",
              zIndex: 2, // Ensure text appears above the overlay
              fontWeight: "bold",
              width:"50%"
            }}
          >
            If you're in the Real Estate, Food and Beverage, E-commerce, or any
            other business sector, our team has you covered! We offer top-notch
            services tailored to your needs. Call us today for the best
            solutions!
          </Typography>
        </Box>
      </Stack>
      <Stack direction={"row"} p={"50px 0px"}>
        {/* <Stack width={"30%"} gap={"20px"} margin={"auto"}>
        <Stack gap={"5px"}>
          <Typography color="#0c9265" fontSize={"20px"}>
            We appreciate your interest in Green & strategy.
          </Typography>
          <Typography color="#cdcdcd" fontSize={"15px"}>
            Please fill out the form to reach us.
          </Typography>
        </Stack>
        <Stack gap={"20px"}>
          <Typography color="#0c9265" fontSize={"20px"}>
            Why contact us?
          </Typography>
          <Box
            color="white"
            display={"flex"}
            gap={"10px"}
            flexDirection={"column"}
          >
            <li>
              Validate your situation with our business advisors and IT
              executives
            </li>
            <li>
              Understand business results, not just technical implications
            </li>
            <li>Discuss possible solutions</li>
            <li>Achieve a better knowledge of the best choices</li>
            <li>Get a cost estimate, no obligation</li>
          </Box>
        </Stack>
      </Stack> */}
        <Stack
          width={"100%"}
          sx={{
            maxWidth: "700px",
            margin: "auto",
            padding: "2rem",
            boxShadow: "0 0 10px 1px #fff",
            borderRadius: "8px",
          }}
        >
          <h2
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Contact us
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* <TextField
              sx={{
                color: "#fff",
                border: "1px solid #ddd",
                "& .MuiInputBase-input::placeholder": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  color: "#fff", // This sets the text color inside the input to white
                },
                "& .MuiInputLabel-root": {
                  color: "#fff", // This sets the label color to white
                },
              }}
              label="First name"
              variant="outlined"
              fullWidth
            /> */}
              <TextField
                sx={{
                  backgroundColor: "black",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "#fff", // Text color
                    "& fieldset": {
                      borderColor: "#ddd", // Normal border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Focused border color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // Label color when not focused
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff", // Label color when focused
                  },
                }}
                label="First name"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter your first name"
                InputProps={{
                  style: { color: "#fff" }, // Text input color
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{
                  backgroundColor: "black",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "#fff", // Text color
                    "& fieldset": {
                      borderColor: "#ddd", // Normal border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Focused border color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // Label color when not focused
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff", // Label color when focused
                  },
                }}
                label="Last name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{
                  backgroundColor: "black",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "#fff", // Text color
                    "& fieldset": {
                      borderColor: "#ddd", // Normal border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Focused border color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // Label color when not focused
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff", // Label color when focused
                  },
                }}
                label="Work Email"
                fullWidth
                required
                type="email"
                placeholder="name@company.com"
              />
            </Grid>
            <Grid item xs={12}>
              <MuiTelInput
                value={phone}
                onChange={handlePhoneChange}
                defaultCountry="IN"
                //   sx={{
                //     width: "100%",
                //     color: "#fff",
                //     border: "1px solid #ddd",
                //     "& .MuiInputBase-input::placeholder": {
                //       color: "#fff",
                //     },
                //     "& .MuiOutlinedInput-root": {
                //       color: "#fff", // This sets the text color inside the input to white
                //     },
                //     "& .MuiInputLabel-root": {
                //       color: "#fff", // This sets the label color to white
                //     },
                //   }}
                sx={{
                  width: "100%",
                  backgroundColor: "black",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "#fff", // Text color
                    "& fieldset": {
                      borderColor: "#ddd", // Normal border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Focused border color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // Label color when not focused
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff", // Label color when focused
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{
                  backgroundColor: "black",
                  "& .MuiInputBase-input::placeholder": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    color: "#fff", // Text color
                    "& fieldset": {
                      borderColor: "#ddd", // Normal border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff", // Focused border color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff", // Label color when not focused
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff", // Label color when focused
                  },
                }}
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                placeholder="Let's talk about your business needs"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  padding: "0.5rem 2rem",
                  bgcolor: "#0c9265",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </>
  );
};

export default ContactSection;
