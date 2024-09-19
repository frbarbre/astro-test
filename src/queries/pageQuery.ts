import gql from 'graphql-tag';

export const PageQuery = gql`
  query PageQuery($id: ID!) {
    page(id: $id, idType: URI) {
      pageSections {
        sections {
          ...HeroStats
          ...CasesFeatured
          ...CasesCarousel
          ...LogosGrid
          ...CardsImageText
          ...TwoColums
          ...HeroImageTiles
          ...HeroTextCTA
          ...CTATextImage
          ...CardsStepText
          ...CardsIconText
          ...CardIconTextVertical
          ...CardsTestimonials
          ...TabsTextImage
          ...CTATextVideo
          ...HeroCards
          ...TeamTextCTA
          ...StatsGrid
          ...FeaturesTwoColumns
          ...CTATextCards
          ...CTACard
          ...TabsFeaturesImage
          ...PostsLatest
          ...HeroText
          ...CasesArchive
          ...HeroWebinars
          ...WebinarsFeatured
          ...WebinarsArchive
          ...ServicesArchive
          ...InteractiveServices
          ...InteractiveApproach
        }
      }
    }
  }

  fragment HeroStats on PageSectionsSectionsHeroStatsLayout {
    heading
    statsHeading
    statsHighlightedHeading
    fieldGroupName
    anchorLink
    heroStats {
      fieldGroupName
      number
      subheading
    }
    buttonOne {
      target
      title
      url
    }
    buttonTwo {
      target
      title
      url
    }
    theme
  }

  fragment CasesFeatured on PageSectionsSectionsCasesFeaturedLayout {
    fieldGroupName
    heading
    imageTag
    image {
      node {
        altText
        uri
      }
    }
    statsHeading
    statsHighlightedHeading
    subheading
    tagline
    stats {
      fieldGroupName
      number
      subheading
    }
    button {
      target
      title
      url
    }
    theme
    imagePosition
    anchorLink
  }

  fragment CasesCarousel on PageSectionsSectionsCasesCarouselLayout {
    anchorLink
    fieldGroupName
    heading
    slides {
      fieldGroupName
      heading
      imageBadge
      imageOne {
        node {
          altText
          uri
        }
      }
      imageTag
      link {
        target
        title
        url
      }
      stats {
        fieldGroupName
        number
        subheading
      }
    }
    theme
  }

  fragment LogosGrid on PageSectionsSectionsLogosGridLayout {
    anchorLink
    theme
    fieldGroupName
    logos(first: 100) {
      nodes {
        altText
        uri
      }
    }
  }

  fragment CardsImageText on PageSectionsSectionsCardsImageTextLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    theme
    cardsImageText {
      fieldGroupName
      heading
      subheading
      link {
        target
        title
        url
      }
      image {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment TwoColums on PageSectionsSectionsTextTwoColumnsLayout {
    anchorLink
    fieldGroupName
    theme
    textColumnOne {
      fieldGroupName
      heading
      image {
        node {
          altText
          uri
        }
      }
      subheading
    }
    textColumnTwo {
      fieldGroupName
      heading
      image {
        node {
          altText
          uri
        }
      }
      subheading
    }
  }

  fragment HeroImageTiles on PageSectionsSectionsHeroImageTilesLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    imageOne {
      node {
        altText
        uri
      }
    }
    imagePosition
    imageTwo {
      node {
        altText
        uri
      }
    }
    buttonOne {
      target
      title
      url
    }
    buttonTwo {
      target
      title
      url
    }
  }

  fragment HeroTextCTA on PageSectionsSectionsHeroTextCtaLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    buttonTwo {
      target
      title
      url
    }
    buttonOne {
      target
      title
      url
    }
  }

  fragment CTATextImage on PageSectionsSectionsCtaTextImageLayout {
    anchorLink
    fieldGroupName
    heading
    imagePosition
    subheading
    tagline
    theme
    image {
      node {
        altText
        uri
      }
    }
    button {
      target
      url
      title
    }
  }

  fragment CardsStepText on PageSectionsSectionsCardsStepTextLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    cardsStepText {
      fieldGroupName
      heading
      step
      subheading
      video {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment CardsIconText on PageSectionsSectionsCardsIconTextLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    cardsIconText {
      fieldGroupName
      heading
      quote
      subheading
      icon {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment CardIconTextVertical on PageSectionsSectionsCardsIconTextVerticalLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    button {
      target
      title
      url
    }
    cardsColumnOneIconTextVertical {
      fieldGroupName
      heading
      subheading
      icon {
        node {
          altText
          uri
        }
      }
    }
    cardsColumnTwoIconTextVertical {
      fieldGroupName
      heading
      subheading
      icon {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment CardsTestimonials on PageSectionsSectionsCardsTestimonialsLayout {
    anchorLink
    fieldGroupName
    subheading
    theme
    tagline
    heading
    cardsTestimonials {
      authorJobTitle
      authorName
      companyName
      heading
      subheading
      fieldGroupName
      authorImage {
        node {
          altText
          uri
        }
      }
      companyIcon {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment TabsTextImage on PageSectionsSectionsTabsTextImageLayout {
    anchorLink
    heading
    fieldGroupName
    imagePosition
    subheading
    tagline
    theme
    tabsTextImage {
      button {
        target
        title
        url
      }
      heading
      fieldGroupName
      image {
        node {
          altText
          uri
        }
      }
      navigation
      subheading
    }
  }

  fragment CTATextVideo on PageSectionsSectionsCtaTextVideoLayout {
    anchorLink
    fieldGroupName
    heading
    tagline
    subheading
    theme
    videoPosition
    video {
      node {
        altText
        uri
      }
    }
    button {
      target
      title
      url
    }
  }

  fragment HeroCards on PageSectionsSectionsHeroCardsLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    theme
    heroCards {
      fieldGroupName
      heading
      subheading
      link {
        target
        title
        url
      }
      image {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment TeamTextCTA on PageSectionsSectionsTeamTextCtaLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    button {
      target
      title
      url
    }
    employees {
      nodes {
        ... on Employee {
          id
          employeeInformation {
            image {
              node {
                altText
                uri
              }
            }
          }
        }
      }
    }
  }

  fragment StatsGrid on PageSectionsSectionsStatsGridLayout {
    anchorLink
    fieldGroupName
    statsGrid {
      fieldGroupName
      number
      subheading
    }
    theme
  }

  fragment FeaturesTwoColumns on PageSectionsSectionsFeaturesTwoColumnsLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    button {
      title
      url
      target
    }
    featuresColumnOne {
      featuresColumnOneFeatures {
        fieldGroupName
        text
        icon {
          node {
            altText
            uri
          }
        }
      }
      fieldGroupName
      heading
      subheading
    }
    featuresColumnTwo {
      featuresColumnTwoFeatures {
        fieldGroupName
        text
        icon {
          node {
            altText
            uri
          }
        }
      }
      fieldGroupName
      heading
      subheading
    }
  }

  fragment CTATextCards on PageSectionsSectionsCtaTextCardsLayout {
    anchorLink
    fieldGroupName
    cardsPosition
    heading
    tagline
    theme
    subheading
    button {
      target
      url
      title
    }
    ctaTextCards {
      heading
      fieldGroupName
      subheading
      icon {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment CTACard on PageSectionsSectionsCtaCardLayout {
    anchorLink
    fieldGroupName
    theme
    subheading
    buttonTwo {
      target
      title
      url
    }
    buttonOne {
      target
      title
      url
    }
  }

  fragment TabsFeaturesImage on PageSectionsSectionsTabsFeaturesImageLayout {
    anchorLink
    fieldGroupName
    heading
    imagePosition
    subheading
    tagline
    theme
    button {
      target
      title
      url
    }
    tabsFeaturesImage {
      features {
        fieldGroupName
        text
      }
      fieldGroupName
      heading
      imageBadge
      navigation
      image {
        node {
          altText
          uri
        }
      }
    }
  }

  fragment PostsLatest on PageSectionsSectionsPostsLatestLayout {
    anchorLink
    fieldGroupName
    heading
    theme
    department {
      edges {
        node {
          ... on Category {
            name
            databaseId
          }
        }
      }
    }
    button {
      url
      title
      target
    }
  }

  fragment HeroText on PageSectionsSectionsHeroTextLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
  }

  fragment CasesArchive on PageSectionsSectionsCasesArchiveLayout {
    anchorLink
    fieldGroupName
    theme
  }

  fragment HeroWebinars on PageSectionsSectionsHeroWebinarsLayout {
    anchorLink
    fieldGroupName
    heading
    tagline
    subheading
    theme
    form {
      badge
      buttonText
      fieldGroupName
      heading
      subheading
    }
    webinar {
      button {
        target
        title
        url
      }
      fieldGroupName
      heading
      subheading
      headingHighlighted
      video {
        node {
          altText
          uri
        }
      }
      employee {
        nodes {
          ... on Employee {
            id
            employeeInformation {
              image {
                node {
                  altText
                  uri
                }
              }
            }
          }
        }
      }
    }
  }

  fragment WebinarsFeatured on PageSectionsSectionsWebinarsFeaturedLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    theme
    tagline
    webinarsFeatured {
      nodes {
        ... on Webinar {
          title
          slug
          webinarInformation {
            hosts {
              pageInfo {
                endCursor
                startCursor
              }
              nodes {
                ... on Employee {
                  id
                  employeeInformation {
                    image {
                      node {
                        altText
                        uri
                      }
                    }
                  }
                  title
                }
              }
            }
            guests {
              nodes {
                ... on Employee {
                  id
                  title
                  employeeInformation {
                    image {
                      node {
                        altText
                        uri
                      }
                    }
                  }
                }
              }
            }
            series
            episode
          }
          webinarCategories {
            nodes {
              databaseId
              name
            }
          }
        }
      }
    }
  }

  fragment WebinarsArchive on PageSectionsSectionsWebinarsArchiveLayout {
    anchorLink
    fieldGroupName
    heading
    theme
    webinarsArchiveSidebar {
      fieldGroupName
      heading
      subheading
      button {
        title
        target
        url
      }
    }
  }

  fragment ServicesArchive on PageSectionsSectionsServicesArchiveLayout {
    anchorLink
    fieldGroupName
    theme
    serviceCategories {
      fieldGroupName
      heading
      image {
        node {
          altText
          uri
        }
      }
      subheading
      services {
        heading
        subheading
        button {
          target
          url
          title
        }
        fieldGroupName
      }
    }
  }

  fragment InteractiveServices on PageSectionsSectionsInteractiveServicesLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    theme
    interactiveServices {
      fieldGroupName
      heading
      subheading
      title
      link {
        title
        target
        url
      }
    }
  }

  fragment InteractiveApproach on PageSectionsSectionsInteractiveApproachLayout {
    anchorLink
    fieldGroupName
    heading
    subheading
    tagline
    theme
    interactiveApproach {
      fieldGroupName
      heading
      subheading
      title
      link {
        target
        title
        url
      }
    }
  }
`;
