const slides = [];

for (let i = 0; i < 30; i++) {
  const year = 2019 - i;
  slides.push({
    id: i,
    title: `Slide ${i}`,
    date: `${year}-01-01`,
    content: `<h1>New Year ${year}</h1><p>Ring in the new ${year}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat, odio quis dignissim lobortis, nisl elit commodo urna, a vestibulum nisi ante a leo. Aliquam egestas bibendum condimentum. Sed et luctus purus, et ornare eros. Nulla hendrerit ante ac odio egestas, id egestas mi auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ac ornare dui. Quisque mollis nibh at metus viverra sodales.</p>`,
  });
}

export default slides;
