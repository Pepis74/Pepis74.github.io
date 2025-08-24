// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-genetic-invaders",
          title: 'Genetic Invaders',
          description: "Mobile arcade game based in Unity made to teach the player key concepts of genetics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/genetic_invaders/";
            },},{id: "projects-go-back-to-dead",
          title: 'Go Back to Dead',
          description: "Infuriated that a zombie apocalypse has reanimated millions of people and ruined all his hard work, Death itself, controlled by the player, must slay as many zombies as he can in this top-down arcade game.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/go_back_to_dead/";
            },},{id: "projects-pbrrenderer",
          title: 'PBRRenderer',
          description: "My bachelor&#39;s thesis, &#39;Photorealistic rendering of car bodies&#39;.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pbrrenderer/";
            },},{id: "projects-quarantamaula-engine",
          title: 'Quarantamaula Engine',
          description: "Custom OpenGL engine developed to teach myself computer graphics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quarantamaula_engine/";
            },},{id: "projects-the-cat",
          title: 'The Cat',
          description: "In this turn-based game the player takes the role of a cat-sitter. They must rearrange furniture to protect their friend’s precious items from his unpredictable pet.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/the_cat/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
