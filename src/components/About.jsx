const About = ({ data }) => (
  <div>
    <h1>About page</h1>
    <img
      src="https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F398c521460dd2c17bc9b67dbf5025fc5.png"
      alt=""
    />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quo
      eligendi id perspiciatis maxime temporibus ullam dignissimos obcaecati
      ipsam magnam.
    </p>
    <p>{data}</p>
  </div>
);

export default About;
