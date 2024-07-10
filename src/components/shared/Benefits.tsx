import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: 7000,
    refereeBonus: 9000,
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: 9000,
    refereeBonus: 11000,
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: 10000,
    refereeBonus: 10000,
  },
];

const Benefits = () => {
  return (
    <section>
      <h2 className="text-center">
        What Are The <span className="text-blue">Referral Benefits?</span>
      </h2>
      <Table className="mt-6 shadow-lg border rounded-lg">
        <TableHeader className="bg-radial-gradient">
          <TableRow>
            <TableHead className="font-semibold text-blue text-base min-w-[250px]">
              Programs
            </TableHead>
            <TableHead className="font-semibold text-blue text-base min-w-36">
              Referrer Bonus
            </TableHead>
            <TableHead className="font-semibold text-blue text-base min-w-36">
              Referee Bonus
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program) => {
            return (
              <TableRow key={program.name}>
                <TableCell className="flex gap-2 items-center">
                  <img src="/images/cap.svg" alt="cap" />
                  <p>{program.name}</p>
                </TableCell>
                <TableCell>{program.referrerBonus}</TableCell>
                <TableCell>{program.refereeBonus}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default Benefits;
