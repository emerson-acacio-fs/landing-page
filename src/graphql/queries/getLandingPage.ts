export const GET_LANDING_PAGE = /**GraphQL*/ `
  fragment logo on LandingPage{
      logo{
        id
        alternativeText
        url
    }
  }



  fragment header on LandingPage{
  header{
      title
      description
      button{
        label
        url
      }
      image{
        alternativeText
        url
      }
    }
  }


  fragment sectionAboutProjest on LandingPage{
    sectionAboutProject{
      title
      description
      image{
        alternativeText
        url
      }
    }
  }

  fragment sectionTech on LandingPage{
    sectionTech{
      title
      techIcons{
        icon{
          alternativeText
          url
        }
        title
      }
    }
  }


  fragment sectionConcepts on LandingPage{
    sectionConcepts{
      title
      concepts{
        title
      }
    }
  }

  fragment sectionModules on LandingPage{
    sectionModules{
      title
      modules{
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage{
    sectionAgenda{
      title
      description
    }
  }


  query GET_LANDING_PAGE{
    landingPage{
      ...logo
      ...header
      ...sectionAboutProjest
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
    }
  }
`
