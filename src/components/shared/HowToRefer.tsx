const StepCard = ({ title, step }: { title: string; step: string }) => {
  return (
    <div className="shadow-lg text-black py-6 px-8 rounded-2xl text-center space-y-4 bg-radial-gradient min-w-60 flex-1">
      <span className="text-6xl font-bold text-blue">{step}</span>
      <p className="text-lg font-medium">{title}</p>
    </div>
  );
};

const HowToRefer = () => {
  return (
    <section>
      <h2 className="text-center">
        How Do I <span className="text-blue">Refer?</span>
      </h2>
      <div className="flex flex-wrap gap-10 my-10">
        <StepCard
          title="Submit referrals easily via our website’s referral section."
          step="01"
        />
        <StepCard
          title="Earn rewards once your referral joins an Accredian program."
          step="02"
        />
        <StepCard
          title="Both parties receive a bonus 30 days after program enrollment."
          step="03"
        />
      </div>
    </section>
  );
};

export default HowToRefer;
