import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import Floor from "@/public/img/floor.svg";
import Putty from "@/public/img/putty.svg";
import Sanitary from "@/public/img/sanitary.svg";
import Switch from "@/public/img/switch.svg";
import Cable from "@/public/img/cable.svg";
import Door from "@/public/img/door.svg";
import AcPoint from "@/public/img/ac-point.svg";
import Plug from "@/public/img/Plug.svg";
import Guard from "@/public/img/guard.svg";
import Fan from "@/public/img/fan.svg";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "0px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="Specifications-list-block grid md:grid-cols-3 sm:grid-cols-2 gap-[30px]">
        <div className="Specifications-list-block-item">
          <div>
            <Image src={Floor} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">Flooring</h3>

            <p>Fully Vitrified Tiles except toilets and balconies.</p>
          </div>
        </div>

        <div className="Specifications-list-block-item">
          <div>
            <Image src={Putty} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">Putty Finishing</h3>

            <p>
              {" "}
              Putty finished with plastic emulsion painted walls in the entire
              apartment.
            </p>
          </div>
        </div>

        <div className="Specifications-list-block-item">
          <div>
            <Image src={Floor} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">
              Anti-skid bath room floor tiles
            </h3>

            <p>
              {" "}
              Anti-skid bathroom floor tiles with designer wall tiles upto
              ceiling.
            </p>
          </div>
        </div>

        <div className="Specifications-list-block-item">
          <div>
            <Image src={Sanitary} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]"> CP fittings</h3>

            <p>
              {" "}
              Good Quality CP Fittings (Jaguar / Hindware or equivalent) and
              white coloured Sanitary Fittings (Cera or equivalent)
            </p>
          </div>
        </div>

        <div className="Specifications-list-block-item">
          <div>
            <Image src={Cable} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">
              {" "}
              Fire retardant (FR) cables
            </h3>

            <p>
              {" "}
              Fire retardant (FR) cables ( V-Guard or equivalent), MCB's and
              ELCB (L&T / Schneider or equivalent).
            </p>
          </div>
        </div>
        <div className="Specifications-list-block-item">
          <div>
            <Image src={Switch} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">
              {" "}
              Modular Switches
            </h3>

            <p> Honeywell or equivalent</p>
          </div>
        </div>

        <div className="Specifications-list-block-item">
          <div>
            <Image src={Switch} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]"> Doors</h3>

            <p>
              Front Door - Flush Door fitted with Godrej or equivalent lock,
              inside paneled skin doors and powder coated aluminium windows with
              Glass & Grill.
            </p>
          </div>
        </div>
        <div className="Specifications-list-block-item">
          <div>
            <Image src={AcPoint} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">
              32 Amps AC points
            </h3>

            <p>
              32 Amps A/c. point-2 points for 3 BHK flat and 1 points for 2BHK
              flat.
            </p>
          </div>
        </div>

        <div className="Specifications-list-block-item">
          <div>
            <Image src={Plug} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">
              16 Amps plug points
            </h3>

            <p>
              16 Amps plug point- 4 points per 3 BHK flat and 4 points per 2 BHK
              flat, including Geyser point in all toilets.
            </p>
          </div>
        </div>

        <div className="Specifications-list-block-item">
          <div>
            <Image src={Guard} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">Aqua Guard</h3>

            <p>Provision for Aqua Guard</p>
          </div>
        </div>

         <div className="Specifications-list-block-item">
          <div>
            <Image src={Fan} alt="Floor" width={24} height={24} />

            <h3 className="text-[20px] font-[600] mb-[8px]">Geyser and Exhaust Fan</h3>

            <p>Provision for Geyser and Exhaust Fan in all Toilets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
