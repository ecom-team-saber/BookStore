const books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    productImg: "images/things-fall-apart.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 25.23,
    inventory: 18,
  },
  {
    title: "Fairy tales",
    author: "Hans Christian Andersen",
    productImg: "images/fairy-tales.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.51,
    inventory: 22,
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    productImg: "images/the-divine-comedy.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.3,
    inventory: 10,
  },
  {
    title: "The Epic Of Gilgamesh",
    author: "Unknown",
    productImg: "images/the-epic-of-gilgamesh.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 11.19,
    inventory: 22,
  },
  {
    title: "The Book Of Job",
    author: "Unknown",
    productImg: "images/the-book-of-job.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 58.73,
    inventory: 3,
  },
  {
    title: "One Thousand and One Nights",
    author: "Unknown",
    productImg: "images/one-thousand-and-one-nights.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 9.43,
    inventory: 3,
  },
  {
    title: "Njál's Saga",
    author: "Unknown",
    productImg: "images/njals-saga.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 59.69,
    inventory: 6,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    productImg: "images/pride-and-prejudice.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 33.26,
    inventory: 7,
  },
  {
    title: "Le Père Goriot",
    author: "Honoré de Balzac",
    productImg: "images/le-pere-goriot.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 63.47,
    inventory: 13,
  },
  {
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    author: "Samuel Beckett",
    productImg: "images/molloy-malone-dies-the-unnamable.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 18.6,
    inventory: 12,
  },
  {
    title: "The Decameron",
    author: "Giovanni Boccaccio",
    productImg: "images/the-decameron.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 22.4,
    inventory: 1,
  },
  {
    title: "Ficciones",
    author: "Jorge Luis Borges",
    productImg: "images/ficciones.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 9.17,
    inventory: 5,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    productImg: "images/wuthering-heights.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 26.46,
    inventory: 14,
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    productImg: "images/l-etranger.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 43.27,
    inventory: 5,
  },
  {
    title: "Poems",
    author: "Paul Celan",
    productImg: "images/poems-paul-celan.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 16.23,
    inventory: 18,
  },
  {
    title: "Journey to the End of the Night",
    author: "Louis-Ferdinand Céline",
    productImg: "images/voyage-au-bout-de-la-nuit.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 60.94,
    inventory: 19,
  },
  {
    title: "Don Quijote De La Mancha",
    author: "Miguel de Cervantes",
    productImg: "images/don-quijote-de-la-mancha.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 28.57,
    inventory: 11,
  },
  {
    title: "The Canterbury Tales",
    author: "Geoffrey Chaucer",
    productImg: "images/the-canterbury-tales.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 67.25,
    inventory: 7,
  },
  {
    title: "Stories",
    author: "Anton Chekhov",
    productImg: "images/stories-of-anton-chekhov.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 11.36,
    inventory: 4,
  },
  {
    title: "Nostromo",
    author: "Joseph Conrad",
    productImg: "images/nostromo.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 24.74,
    inventory: 21,
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    productImg: "images/great-expectations.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 34.02,
    inventory: 13,
  },
  {
    title: "Jacques the Fatalist",
    author: "Denis Diderot",
    productImg: "images/jacques-the-fatalist.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 52.26,
    inventory: 24,
  },
  {
    title: "Berlin Alexanderplatz",
    author: "Alfred Döblin",
    productImg: "images/berlin-alexanderplatz.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 46.84,
    inventory: 22,
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    productImg: "images/crime-and-punishment.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 48.17,
    inventory: 13,
  },
  {
    title: "The Idiot",
    author: "Fyodor Dostoevsky",
    productImg: "images/the-idiot.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 39.11,
    inventory: 9,
  },
  {
    title: "The Possessed",
    author: "Fyodor Dostoevsky",
    productImg: "images/the-possessed.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 37.13,
    inventory: 9,
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    productImg: "images/the-brothers-karamazov.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 19.97,
    inventory: 10,
  },
  {
    title: "Middlemarch",
    author: "George Eliot",
    productImg: "images/middlemarch.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 57.58,
    inventory: 21,
  },
  {
    title: "Invisible Man",
    author: "Ralph Ellison",
    productImg: "images/invisible-man.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 23.71,
    inventory: 22,
  },
  {
    title: "Medea",
    author: "Euripides",
    productImg: "images/medea.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 51.31,
    inventory: 11,
  },
  {
    title: "Absalom, Absalom!",
    author: "William Faulkner",
    productImg: "images/absalom-absalom.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 14.41,
    inventory: 9,
  },
  {
    title: "The Sound and the Fury",
    author: "William Faulkner",
    productImg: "images/the-sound-and-the-fury.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 51.81,
    inventory: 15,
  },
  {
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    productImg: "images/madame-bovary.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 31.13,
    inventory: 25,
  },
  {
    title: "Sentimental Education",
    author: "Gustave Flaubert",
    productImg: "images/l-education-sentimentale.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 65.92,
    inventory: 19,
  },
  {
    title: "Gypsy Ballads",
    author: "Federico García Lorca",
    productImg: "images/gypsy-ballads.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 46.7,
    inventory: 7,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    productImg: "images/one-hundred-years-of-solitude.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 61.35,
    inventory: 3,
  },
  {
    title: "Love in the Time of Cholera",
    author: "Gabriel García Márquez",
    productImg: "images/love-in-the-time-of-cholera.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 62.15,
    inventory: 8,
  },
  {
    title: "Faust",
    author: "Johann Wolfgang von Goethe",
    productImg: "images/faust.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 10.04,
    inventory: 16,
  },
  {
    title: "Dead Souls",
    author: "Nikolai Gogol",
    productImg: "images/dead-souls.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 35.41,
    inventory: 2,
  },
  {
    title: "The Tin Drum",
    author: "Günter Grass",
    productImg: "images/the-tin-drum.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 20.24,
    inventory: 4,
  },
  {
    title: "The Devil to Pay in the Backlands",
    author: "João Guimarães Rosa",
    productImg: "images/the-devil-to-pay-in-the-backlands.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 13.49,
    inventory: 8,
  },
  {
    title: "Hunger",
    author: "Knut Hamsun",
    productImg: "images/hunger.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 50.17,
    inventory: 19,
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    productImg: "images/the-old-man-and-the-sea.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 26.54,
    inventory: 12,
  },
  {
    title: "Iliad",
    author: "Homer",
    productImg: "images/the-iliad-of-homer.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 43.12,
    inventory: 8,
  },
  {
    title: "Odyssey",
    author: "Homer",
    productImg: "images/the-odyssey-of-homer.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 52.63,
    inventory: 13,
  },
  {
    title: "A Doll's House",
    author: "Henrik Ibsen",
    productImg: "images/a-Dolls-house.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 58.58,
    inventory: 4,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    productImg: "images/ulysses.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 12.51,
    inventory: 2,
  },
  {
    title: "Stories",
    author: "Franz Kafka",
    productImg: "images/stories-of-franz-kafka.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 65.2,
    inventory: 14,
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    productImg: "images/the-trial.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 58.3,
    inventory: 25,
  },
  {
    title: "The Castle",
    author: "Franz Kafka",
    productImg: "images/the-castle.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 43.97,
    inventory: 4,
  },
  {
    title: "The recognition of Shakuntala",
    author: "Kālidāsa",
    productImg: "images/the-recognition-of-shakuntala.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 60.99,
    inventory: 6,
  },
  {
    title: "The Sound of the Mountain",
    author: "Yasunari Kawabata",
    productImg: "images/the-sound-of-the-mountain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.03,
    inventory: 8,
  },
  {
    title: "Zorba the Greek",
    author: "Nikos Kazantzakis",
    productImg: "images/zorba-the-greek.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 24.49,
    inventory: 16,
  },
  {
    title: "Sons and Lovers",
    author: "D. H. Lawrence",
    productImg: "images/sons-and-lovers.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 10.85,
    inventory: 16,
  },
  {
    title: "Independent People",
    author: "Halldór Laxness",
    productImg: "images/independent-people.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 35.2,
    inventory: 10,
  },
  {
    title: "Poems",
    author: "Giacomo Leopardi",
    productImg: "images/poems-giacomo-leopardi.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 70.21,
    inventory: 17,
  },
  {
    title: "The Golden Notebook",
    author: "Doris Lessing",
    productImg: "images/the-golden-notebook.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 24.84,
    inventory: 19,
  },
  {
    title: "Pippi Longstocking",
    author: "Astrid Lindgren",
    productImg: "images/pippi-longstocking.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 41.69,
    inventory: 24,
  },
  {
    title: "Diary of a Madman",
    author: "Lu Xun",
    productImg: "images/diary-of-a-madman.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 23.91,
    inventory: 18,
  },
  {
    title: "Children of Gebelawi",
    author: "Naguib Mahfouz",
    productImg: "images/children-of-gebelawi.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.32,
    inventory: 25,
  },
  {
    title: "Buddenbrooks",
    author: "Thomas Mann",
    productImg: "images/buddenbrooks.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 24.78,
    inventory: 16,
  },
  {
    title: "The Magic Mountain",
    author: "Thomas Mann",
    productImg: "images/the-magic-mountain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 33.43,
    inventory: 15,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    productImg: "images/moby-dick.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 46.47,
    inventory: 7,
  },
  {
    title: "Essays",
    author: "Michel de Montaigne",
    productImg: "images/essais.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 65.07,
    inventory: 6,
  },
  {
    title: "History",
    author: "Elsa Morante",
    productImg: "images/history.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 32.24,
    inventory: 15,
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    productImg: "images/beloved.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 46.11,
    inventory: 15,
  },
  {
    title: "The Tale of Genji",
    author: "Murasaki Shikibu",
    productImg: "images/the-tale-of-genji.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 41.77,
    inventory: 18,
  },
  {
    title: "The Man Without Qualities",
    author: "Robert Musil",
    productImg: "images/the-man-without-qualities.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 38.9,
    inventory: 22,
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    productImg: "images/lolita.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 12.69,
    inventory: 3,
  },
  {
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    productImg: "images/nineteen-eighty-four.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 69.34,
    inventory: 8,
  },
  {
    title: "Metamorphoses",
    author: "Ovid",
    productImg: "images/the-metamorphoses-of-ovid.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 31.84,
    inventory: 10,
  },
  {
    title: "The Book of Disquiet",
    author: "Fernando Pessoa",
    productImg: "images/the-book-of-disquiet.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 45.13,
    inventory: 3,
  },
  {
    title: "Tales",
    author: "Edgar Allan Poe",
    productImg: "images/tales-and-poems-of-edgar-allan-poe.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 29.13,
    inventory: 17,
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    productImg: "images/a-la-recherche-du-temps-perdu.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 17.95,
    inventory: 12,
  },
  {
    title: "Gargantua and Pantagruel",
    author: "François Rabelais",
    productImg: "images/gargantua-and-pantagruel.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 31.44,
    inventory: 11,
  },
  {
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    productImg: "images/pedro-paramo.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 53.83,
    inventory: 23,
  },
  {
    title: "The Masnavi",
    author: "Rumi",
    productImg: "images/the-masnavi.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 28.24,
    inventory: 24,
  },
  {
    title: "Midnight's Children",
    author: "Salman Rushdie",
    productImg: "images/midnights-children.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 39.24,
    inventory: 7,
  },
  {
    title: "Bostan",
    author: "Saadi",
    productImg: "images/bostan.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 34.62,
    inventory: 4,
  },
  {
    title: "Season of Migration to the North",
    author: "Tayeb Salih",
    productImg: "images/season-of-migration-to-the-north.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 67.27,
    inventory: 2,
  },
  {
    title: "Blindness",
    author: "José Saramago",
    productImg: "images/blindness.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 66.14,
    inventory: 23,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    productImg: "images/hamlet.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 17.11,
    inventory: 4,
  },
  {
    title: "King Lear",
    author: "William Shakespeare",
    productImg: "images/king-lear.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 27.28,
    inventory: 3,
  },
  {
    title: "Othello",
    author: "William Shakespeare",
    productImg: "images/othello.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 66.34,
    inventory: 5,
  },
  {
    title: "Oedipus the King",
    author: "Sophocles",
    productImg: "images/oedipus-the-king.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 12.45,
    inventory: 18,
  },
  {
    title: "The Red and the Black",
    author: "Stendhal",
    productImg: "images/le-rouge-et-le-noir.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 12.36,
    inventory: 20,
  },
  {
    title: "The Life And Opinions of Tristram Shandy",
    author: "Laurence Sterne",
    productImg: "images/the-life-and-opinions-of-tristram-shandy.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 33.92,
    inventory: 13,
  },
  {
    title: "Confessions of Zeno",
    author: "Italo Svevo",
    productImg: "images/confessions-of-zeno.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 23.9,
    inventory: 19,
  },
  {
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
    productImg: "images/gullivers-travels.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 33.38,
    inventory: 24,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    productImg: "images/war-and-peace.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 14.23,
    inventory: 21,
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    productImg: "images/anna-karenina.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 44.1,
    inventory: 5,
  },
  {
    title: "The Death of Ivan Ilyich",
    author: "Leo Tolstoy",
    productImg: "images/the-death-of-ivan-ilyich.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 66.11,
    inventory: 7,
  },
  {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    productImg: "images/the-adventures-of-huckleberry-finn.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 75.74,
    inventory: 19,
  },
  {
    title: "Ramayana",
    author: "Valmiki",
    productImg: "images/ramayana.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 73.05,
    inventory: 24,
  },
  {
    title: "The Aeneid",
    author: "Virgil",
    productImg: "images/the-aeneid.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 14.57,
    inventory: 25,
  },
  {
    title: "Mahabharata",
    author: "Vyasa",
    productImg: "images/the-mahab-harata.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 34.87,
    inventory: 12,
  },
  {
    title: "Leaves of Grass",
    author: "Walt Whitman",
    productImg: "images/leaves-of-grass.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 60.57,
    inventory: 11,
  },
  {
    title: "Mrs Dalloway",
    author: "Virginia Woolf",
    productImg: "images/mrs-dalloway.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 36.58,
    inventory: 13,
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    productImg: "images/to-the-lighthouse.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 31.54,
    inventory: 3,
  },
  {
    title: "Memoirs of Hadrian",
    author: "Marguerite Yourcenar",
    productImg: "images/memoirs-of-hadrian.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt. Vitae proin sagittis nisl rhoncus mattis. Sit amet facilisis magna etiam.",
    price: 52.97,
    inventory: 9,
  },
];
