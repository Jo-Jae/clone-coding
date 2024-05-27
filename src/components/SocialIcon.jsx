const SocialIcon = ({ image }) => {
  return (
    <img className="w-7 h-7" src={`/images/footer/${image}.svg`} alt={image} />
  );
};

export default SocialIcon;
