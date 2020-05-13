import FooterComponent from '../components/FooterComponent';

test('footer contains link to my github', () => {
  const footer = new FooterComponent();
  expect(footer.init().querySelector('a').href).toBe('https://github.com/nadia-marchenko');
});
