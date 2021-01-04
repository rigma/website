<template>
  <div v-if="profile">
    <article id="profile">
      <h2>{{ $t('titles.profile') }}</h2>
      <nuxt-content :document="profile" />
    </article>
    <article id="experience">
      <h2>{{ $t('titles.workExperience') }}</h2>
      <Experience from="2018-10-30" to="2019-12-09">
        <template #title>{{ $t('experiences.ornikar.title') }}</template>
        <template #details>
          <p v-html="$t('experiences.ornikar.details')" />
        </template>
        <template #skills>
          <Skill id="php" title="PHP" disabled />
          <Skill id="laravel" title="Laravel" disabled />
          <Skill id="node" title="Node.js" disabled />
          <Skill id="mysql" title="MySQL" icon="database" disabled />
          <Skill id="psql" title="PostgreSQL" icon="database" disabled />
          <Skill id="datadog" title="Datadog" kind="devops" disabled />
          <Skill id="sentry" title="Sentry" kind="devops" disabled />
          <Skill id="aws" title="AWS" disabled />
          <Skill id="gcloud" title="Google Cloud" disabled />
          <Skill id="jira" title="Jira" disabled />
        </template>
      </Experience>
      <Experience from="2018-02-01" to="2018-08-30">
        <template #title>{{ $t('experiences.astrakhan.title') }}</template>
        <template #details>
          <p v-html="$t('experiences.astrakhan.details')" />
        </template>
        <template #skills>
          <Skill id="unity" title="Unity" disabled />
          <Skill id="cs" title="C#" kind="code" disabled />
          <Skill id="js" title="Javascript" disabled />
          <Skill id="trello" title="Trello" disabled />
        </template>
      </Experience>
      <Experience from="2017-04-15" to="2017-08-30" no-separator>
        <template #title>{{ $t('experiences.unlv.title') }}</template>
        <template #details>
          <p v-html="$t('experiences.unlv.details')" />
        </template>
        <template #skills>
          <Skill id="unity" title="Unity" disabled />
          <Skill id="cs" title="C#" kind="code" disabled />
        </template>
      </Experience>
    </article>
    <article id="education">
      <h2>{{ $t('titles.education') }}</h2>
      <Formation end="2018-11-01"
        :title="$t('education.efrei.title')"
        :details="$t('education.efrei.details')"
      />
      <Formation start="2017-10-01"
        end="2018-02-01"
        :title="$t('education.socge.title')"
        :details="$t('education.socge.details')"
      />
      <Formation end="2016-06-01"
        :title="$t('education.upem.title')"
        no-separator
      />
    </article>
    <article id="skills">
      <h2>{{ $t('titles.skills') }}</h2>
      <p>
        {{ $t('skillIntro') }}
      </p>
      <SkillCollection :skills="skills" />
    </article>
  </div>
  <WorkInProgress v-else />
</template>

<i18n>
{
  "en": {
    "titles": {
      "profile": "Profile",
      "workExperience": "Work Experience",
      "education": "Education",
      "skills": "Skills"
    },
    "experiences": {
      "ornikar": {
        "title": "Junior Backend Developer — Ornikar",
        "details": "Development and maintenance of REST and GraphQL API with Laravel. Monitoring of the infrastructure hosted on AWS using Datadog and Sentry.<br />Writing technical tasks and specifications."
      },
      "astrakhan": {
        "title": "End-of-study Internship — Astrakan",
        "details": "Software development for Microsoft HoloLens headset with the Unity engine.<br />Git workflow management of the developer team."
      },
      "unlv": {
        "title": "Student-Intern — University of Nevada in Las Vegas",
        "details": "Involved in the development of an experimental virtual reality driving simulator made with Unity.<br />3D replicas of prototypes from the civil engineering laboratory integration into a simulation."
      }
    },
    "education": {
      "efrei": {
        "title": "Efrei Paris, Villejuif — Engineering Degree of Efrei Paris",
        "details": "Computer vision and Virtual Reality major."
      },
      "socge": {
        "title": "End-of-study Project — Société Générale",
        "details": "API prototyping to make energy consumption audits of websites."
      },
      "upem": {
        "title": "UPEM, Marne-la-Vallée — Mathematics and Computer Science Bachelor’s Degree"
      }
    },
    "skillIntro": "Here I have gathered a collection of my skills in computer science. You can filter it and select a specific skill to see with which experience it's bound to."
  },
  "fr": {
    "titles": {
      "profile": "Présentation",
      "workExperience": "Expérience",
      "education": "Formation",
      "skills": "Compétences"
    },
    "experiences": {
      "ornikar": {
        "title": "Développeur Backend Junior - Ornikar",
        "details": "Développement et maintien d’API REST et GraphQL avec Laravel. Monitoring de l’infrastructure hébergée sur AWS à l’aide Datadog et Sentry.<br />Rédactions de tâches techniques et de spécifications."
      },
      "astrakhan": {
        "title": "Stage de fin d'études - Astrakan",
        "details": "Développement sur le moteur Unity pour le casque Microsoft HoloLens.<br />Gestion du workflow Git de l’équipe des développeurs."
      },
      "unlv": {
        "title": "Étudiant-stagiaire - Université du Nevada à Las Vegas",
        "details": "Développement sur le moteur Unity pour un simulateur de conduite en réalité virtuelle expérimental. <br />Intégration de répliques 3D de prototypes du laboratoire du génie civil."
      }
    },
    "education": {
      "efrei": {
        "title": "Efrei Paris, Villejuif — Diplôme d’Ingénieur de l’Efrei",
        "details": "Majeure Imagerie et Réalité Virtuelle."
      },
      "socge": {
        "title": "Projet de fin d’Études — Société Générale",
        "details": "Réalisation d’un prototype pour réaliser des audits de consommation énergétiques de sites web."
      },
      "upem": {
        "title": "UPEM, Marne-la-Vallée — Licence mathématiques-informatique"
      }
    },
    "skillIntro": "J'ai rassemblé ici un ensemble de mes compétences en informatique. Vous pouvez filtrer cette liste et sélectionner une compétence particulière pour voir avec quelle expérience elle est liée."
  }
}
</i18n>

<script>
import { mapState } from 'vuex'
import Experience from '@/components/Experience.vue'
import Formation from '@/components/Formation.vue'
import SkillCollection from '@/components/SkillCollection.vue'

export default {
  async middleware ({ store }) {
    await store.dispatch('content/load', 'profile')
  },
  async asyncData ({ $content }) {
    const content = await $content('skills').fetch()

    return { skills: content.skills }
  },
  computed: mapState({
    profile: state => state.content.cache['profile']
  }),
  components: {
    Experience,
    Formation,
    SkillCollection
  }
}
</script>

<style>
h2 {
  padding-bottom: 8px;
}

#skills {
  margin-bottom: 32px;
}

#skills p {
  margin-bottom: 16px;
}
</style>
