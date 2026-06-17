export const churchInfo = {
  name: "Church of Christ Hilltop",
  tagline: "Worship, Fellowship and Service",
  email: "hilltopcocgh@gmail.com",
  phone: "0244171458 / 0545015488",
  address: "GW-0547-9006",
  service: "Sundays: Celebration of the Lord's Day (8:30 AM - 11:00 AM) | Wednesdays: Bible Studies (7:00 PM - 8:00 PM) | Fridays: Prayers/Songs (7:00 PM - 8:00 PM)",
  aboutUs: "Church of Christ Hilltop is a welcoming community dedicated to spreading the Gospel, fostering spiritual growth, and serving our neighbors with love and compassion.",
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sermons", label: "Sermons" },
  { href: "/worship", label: "Live Worship" },
  { href: "/prayer", label: "Prayer Requests" },
  { href: "/giving", label: "Giving" },
  { href: "/contact", label: "Contact" },
  { href: "/directory", label: "Directory" },
];

export const heroContent = {
  title: "Welcome to Church of Christ Hilltop",
  subtitle: "A place of faith, community, and spiritual growth",
  description: "\"And you shall know the truth and the truth shall set you free\" - John 8:32. Join us on your spiritual journey as we worship together, grow in faith, and serve our community with compassion and dedication.",
  primaryCta: "Join Our Community",
  secondaryCta: "Watch Sermons",
};

export const events = [
  {
    id: 1,
    title: "Celebration of the Lord's Day",
    date: "Every Sunday",
    time: "8:30 AM - 11:00 AM",
    location: "Main Sanctuary",
    description: "Join us for our Sunday celebration with worship, prayer, and teaching.",
    image: "/images/worship.jpg",
  },
  {
    id: 2,
    title: "Bible Studies",
    date: "Every Wednesday",
    time: "7:00 PM - 8:00 PM",
    location: "Fellowship Hall",
    description: "Deepen your understanding of Scripture through interactive Bible study and discussion.",
    image: "/images/bible-study.jpg",
  },
  {
    id: 3,
    title: "Prayers/Songs",
    date: "Every Friday",
    time: "7:00 PM - 8:00 PM",
    location: "Main Sanctuary",
    description: "A time of prayer and worship through songs, lifting our hearts together.",
    image: "/images/prayer.jpg",
  },
  {
    id: 4,
    title: "Community Service",
    date: "Monthly",
    time: "Varies",
    location: "Various Locations",
    description: "Serve our community through outreach and service opportunities.",
    image: "/images/service.jpg",
  },
];

export const sermons = [
  {
    id: 1,
    title: "Faith in the Storm",
    preacher: "Preacher Obeng Asare",
    date: "2026-06-07",
    scripture: "Mark 4:35-41",
    duration: "42 minutes",
    description: "Discover how faith in Christ sustains us through life's challenges.",
    youtubeId: "wr2CM48xKVY",
  },
  {
    id: 2,
    title: "Living as Living Stones",
    preacher: "Preacher Christopher",
    date: "2026-05-02",
    scripture: "1 Peter 2:4-10",
    duration: "38 minutes",
    description: "Understand your role in building God's kingdom as a living stone in His church.",
    youtubeId: "wr2CM48xKVY",
  },
  {
    id: 3,
    title: "Love Never Fails",
    preacher: "Stephen Berko",
    date: "2026-05-26",
    scripture: "1 Corinthians 13:1-13",
    duration: "45 minutes",
    description: "Explore the transformative power of God's love in our lives and relationships.",
    youtubeId: "wr2CM48xKVY",
  },
];

export const prayerRequestCategories = [
  "Personal Health",
  "Family Matters",
  "Career & Education",
  "Financial",
  "Relationships",
  "Spiritual Growth",
  "Praise & Thanksgiving",
  "Other",
];

export const faqItems = [
  {
    question: "What are your service times?",
    answer: "Sundays: Celebration of the Lord's Day (8:30 AM - 11:00 AM) | Wednesdays: Bible Studies (7:00 PM - 8:00 PM) | Fridays: Prayers/Songs (7:00 PM - 8:00 PM)",
  },
  {
    question: "Do I need to be a member to attend?",
    answer: "Absolutely not! We welcome everyone, regardless of background or beliefs. Come as you are and experience our community.",
  },
  {
    question: "How can I get involved in the church?",
    answer: "There are many ways to serve and grow with us. Visit our Contact page or speak with a staff member about ministry opportunities.",
  },
  {
    question: "How can I support the work of the church?",
    answer: "You may support the work of the church through Mobile Money using the church donation number.",
  },
  {
    question: "Is there a children's program?",
    answer: "Yes! We have nursery care for infants and Sunday School classes for children of all ages during both morning services.",
  },
  {
    question: "How do I request prayer?",
    answer: "You can submit a prayer request through our online form, speak with a staff member in person, or email us at prayer@hilltopchurch.org.",
  },
];

export const directoryStaff = [
  {
    id: 1,
    name: "Preacher Obeng Asare",
    title: "Lead Preacher",
    email: "hilltopcocgh@gmail.com",
    phone: "0244171458",
  },
  {
    id: 2,
    name: "Bismark Asare",
    title: "Church Administrator",
    email: "hilltopcocgh@gmail.com",
    phone: "0545015488",
  },
  {
    id: 3,
    name: "Preacher Conrad Kakraba",
    title: "Media Team Lead",
    email: "hilltopcocgh@gmail.com",
    phone: "0549572991",
  },
  {
    id: 4,
    name: "Doreen Obeng Asare",
    title: "Children's Ministry",
    email: "hilltopcocgh@gmail.com",
    phone: "0243470652",
  },
  {
    id: 5,
    name: "Mary Boateng",
    title: "Youth Ministry",
    email: "hilltopcocgh@gmail.com",
    phone: "0243971679",
  },
];

// Photo gallery — drop real photos into /public/gallery using these
// filenames and they'll automatically replace the placeholder artwork.
export const galleryImages = [
  {
    src: "/gallery/worship.jpg",
    alt: "The congregation worshipping together on a Sunday morning",
    caption: "Sunday Celebration",
    tag: "Worship · 8:30 AM",
  },
  {
    src: "/gallery/bible-study.jpg",
    alt: "Members gathered for Wednesday Bible study",
    caption: "Bible Study",
    tag: "Wednesdays · 7:00 PM",
  },
  {
    src: "/gallery/prayer.jpg",
    alt: "Members lifting their voices in prayer and song",
    caption: "Prayer & Praise Night",
    tag: "Fridays · 7:00 PM",
  },
  {
    src: "/gallery/choir.jpg",
    alt: "The choir ministering in song",
    caption: "Choir Ministry",
    tag: "Lifting every voice",
  },
  {
    src: "/gallery/youth.jpg",
    alt: "Youth fellowship gathering",
    caption: "Youth Fellowship",
    tag: "Growing in faith, together",
  },
  {
    src: "/gallery/outreach.jpg",
    alt: "Community outreach in Kwabenya",
    caption: "Community Outreach",
    tag: "Serving Kwabenya with love",
  },
];

// Rotating scripture verses for the "Words to Live By" section.
export const verses = [
  {
    text: "And ye shall know the truth, and the truth shall make you free.",
    reference: "John 8:32",
  },
  {
    text: "Ye are the light of the world... let your light so shine before men.",
    reference: "Matthew 5:14, 16",
  },
  {
    text: "Ye also, as lively stones, are built up a spiritual house.",
    reference: "1 Peter 2:5",
  },
  {
    text: "Love suffereth long, and is kind... love never faileth.",
    reference: "1 Corinthians 13:4, 8",
  },
  {
    text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    reference: "Matthew 11:28",
  },
];

// Core pillars — derived from the church's "Worship, Fellowship and Service" tagline.
export const corePillars = [
  {
    title: "Worship",
    description: "Honest, heartfelt praise that lifts our eyes from the everyday to the eternal.",
    icon: "Flame",
  },
  {
    title: "Fellowship",
    description: "A family that walks together — sharing life, laughter, prayer and burdens.",
    icon: "Users",
  },
  {
    title: "Service",
    description: "Faith in motion: caring for Kwabenya and beyond with open hands and hearts.",
    icon: "HandHeart",
  },
];

