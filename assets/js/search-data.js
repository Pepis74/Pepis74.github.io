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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-horror-stories",
          title: "horror stories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/horror_stories/";
          },
        },{id: "horror_stories-finisterre",
          title: 'Finisterre',
          description: "Two friends explore the thousand year old abandoned lighthouse that looks over their hometown.",
          section: "Horror_stories",handler: () => {
              window.location.href = "/horror_stories/finisterre/";
            },},{id: "projects-brawlight-manor",
          title: 'Brawlight Manor',
          description: "1v1 Couch Multiplayer game developed by a team of students at my Master&#39;s degree.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brawlight_manor/";
            },},{id: "projects-genetic-invaders",
          title: 'Genetic Invaders',
          description: "Mobile arcade game based in Unity made to teach the player key concepts of genetics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/genetic_invaders/";
            },},{id: "projects-go-back-to-dead",
          title: 'Go Back to Dead',
          description: "Infuriated that a zombie apocalypse has reanimated millions of people and ruined all his hard work, Death itself, controlled by the player, must slay as many zombies as he can in this top-down arcade game.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/go_back_to_dead/";
            },},{id: "projects-luigi-39-s-mansion-vr",
          title: 'Luigi&amp;#39;s Mansion VR',
          description: "VR arcade game inspired by Luigi&#39;s Mansion I made as a project for my Master&#39;s degree.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/luigis_mansion_vr/";
            },},{id: "projects-miniengine",
          title: 'MiniEngine',
          description: "Vulkan RTX engine developed as a class project for my Master&#39;s degree.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mini_engine/";
            },},{id: "projects-nori-based-path-tracer",
          title: 'Nori-Based Path Tracer',
          description: "CPU Path Tracer built on Nori done as a class project for my Master&#39;s degree.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nori/";
            },},{id: "projects-pbrrenderer",
          title: 'PBRRenderer',
          description: "My bachelor&#39;s thesis, an interface over Radeon ProRender to adapt it to the specific rendering needs of the client.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pbrrenderer/";
            },},{id: "projects-quarantamaula-engine",
          title: 'Quarantamaula Engine',
          description: "Custom OpenGL engine developed to teach myself computer graphics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quarantamaula_engine/";
            },},{id: "projects-quarantamaulanx",
          title: 'QuarantamaulaNX',
          description: "The Quarantamaula engine ported to the Nintendo Switch.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quarantamaula_nx/";
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
