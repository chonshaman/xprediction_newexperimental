// This file contains the complete globals.css content as a string
// It's auto-generated to display in the Design System Variables page

export const globalsCssContent = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700;800&display=swap");

@custom-variant dark (&:is(.dark *));

/* CSS Variables from Figma Design System */
:root {
  --font-size: 16px;

  /* Typography Variables */
  --text-5xl: 60px; /* h1 */
  --text-4xl: 48px; /* h1 */
  --text-3xl: 30px; /* h2 */
  --text-2xl: 24px; /* h3 */
  --text-xl: 20px; /* h4 */
  --text-l:18px;
  --text-base: 16px; /* p */
  --text-s: 14px; /* p */
  --text-xs: 12px; /* label */
  --text-xxs: 10px; /* label */

  /* Font Weights */
  --font-weight-extra-bold: 800;
  --font-weight-semi-bold: 600;
  --font-weight-medium: 500;
  --font-weight-normal: 400;

  /* Slate Colors */
  --slate-50: #f8fafcff;
  --slate-100: #f1f5f9ff;
  --slate-200: #e2e8f0ff;
  --slate-300: #cbd5e1ff;
  --slate-400: #94a3b8ff;
  --slate-500: #64748bff;
  --slate-600: #475569ff;
  --slate-700: #334155ff;
  --slate-800: #1e293bff;
  --slate-900: #0f172aff;
  --slate-950: #020617ff;

  /* Luminance Colors for Light Mode */
  --lum-01: #ffffff;
  --lum-02: #fffefc;
  --lum-03: #e6eff2;
  --lum-04: #dbe7eb;
  --lum-05: #c1d5db;
  --lum-06: #afc5cc;
  --lum-07: #a7bbc2;
  --lum-08: #9aacb2;
  --lum-09: #8c9da3;
  --lum-10: #7d8c91;
  --lum-11: #657175;
  --lum-12: #353b3d;

  /* Alpha Colors */
  --white-a1: #ffffff0d;
  --white-a2: #ffffff1a;
  --white-a3: #ffffff26;
  --white-a4: #ffffff33;
  --white-a5: #ffffff4d;
  --white-a6: #ffffff66;
  --white-a7: #ffffff80;
  --white-a8: #ffffff99;
  --white-a9: #ffffffb2;
  --white-a10: #ffffffcc;
  --white-a11: #ffffffe5;
  --white-a12: #fffffff2;

  --black-a1: #0000000d;
  --black-a2: #0000001a;
  --black-a3: #00000026;
  --black-a4: #00000033;
  --black-a5: #0000004d;
  --black-a6: #00000066;
  --black-a7: #00000080;
  --black-a8: #00000099;
  --black-a9: #000000b2;
  --black-a10: #000000cc;
  --black-a11: #000000e5;
  --black-a12: #000000f2;

  /* Red Colors */
  --red-1: #fffcfc;
  --red-2: #fff7f7;
  --red-3: #feebec;
  --red-4: #ffdbdc;
  --red-5: #ffcdce;
  --red-6: #fdbdbe;
  --red-7: #f4a9aa;
  --red-8: #eb8e90;
  --red-9: #e5484d;
  --red-10: #dc3e42;
  --red-11: #ce2c31;
  --red-12: #641723;

  /* Gray Colors */
  --gray-1: #fcfcfc;
  --gray-2: #f8f8f8;
  --gray-3: #f3f3f3;
  --gray-4: #ededed;
  --gray-5: #e8e8e8;
  --gray-6: #e2e2e2;
  --gray-7: #dbdbdb;
  --gray-8: #c7c7c7;
  --gray-9: #8f8f8f;
  --gray-10: #858585;
  --gray-11: #6f6f6f;
  --gray-12: #171717;

  /* Mauve Colors */
  --mauve-1: #fdfcfd;
  --mauve-2: #f9f8f9;
  --mauve-3: #f4f2f4;
  --mauve-4: #eeedef;
  --mauve-5: #e9e8ea;
  --mauve-6: #e4e2e4;
  --mauve-7: #dcdbdd;
  --mauve-8: #c8c7cb;
  --mauve-9: #908e96;
  --mauve-10: #86848d;
  --mauve-11: #6f6e77;
  --mauve-12: #1a1523;

  /* Sage Colors */
  --sage-1: #fbfdfc;
  --sage-2: #f7f9f8;
  --sage-3: #eef1f0;
  --sage-4: #e6e9e8;
  --sage-5: #dfe2e0;
  --sage-6: #d7dad9;
  --sage-7: #cbcfcd;
  --sage-8: #b8bcba;
  --sage-9: #868e8b;
  --sage-10: #7c8481;
  --sage-11: #5f6563;
  --sage-12: #1a211e;

  /* Blue Colors */
  --blue-1: #fbfdff;
  --blue-2: #f4faff;
  --blue-3: #e6f4fe;
  --blue-4: #d5efff;
  --blue-5: #c2e5ff;
  --blue-6: #acd8fc;
  --blue-7: #8ec8f6;
  --blue-8: #5eb1ef;
  --blue-9: #0090ff;
  --blue-10: #0588f0;
  --blue-11: #0d74ce;
  --blue-12: #113264;

  /* Iris Colors */
  --iris-1: #fdfdff;
  --iris-2: #f8f8ff;
  --iris-3: #f0f1fe;
  --iris-4: #e6e7ff;
  --iris-5: #dadcff;
  --iris-6: #cbcdff;
  --iris-7: #b8baf8;
  --iris-8: #9b9ef0;
  --iris-9: #5b5bd6;
  --iris-10: #5151cd;
  --iris-11: #5753c6;
  --iris-12: #272962;

  /* Additional Color Scales */
  --amber-1: #fefdfb;
  --amber-2: #fefbe9;
  --amber-3: #fff7c2;
  --amber-4: #ffee9c;
  --amber-5: #fbe577;
  --amber-6: #f3d673;
  --amber-7: #e9c162;
  --amber-8: #e2a336;
  --amber-9: #ffc53d;
  --amber-10: #ffba18;
  --amber-11: #ab6400;
  --amber-12: #4f3422;
  --orange-1: #fefcfb;
  --orange-2: #fff7ed;
  --orange-3: #ffefd6;
  --orange-4: #ffdfb5;
  --orange-5: #ffd19a;
  --orange-6: #ffc182;
  --orange-7: #f5ae73;
  --orange-8: #ec9455;
  --orange-9: #f76b15;
  --orange-10: #ef5f00;
  --orange-11: #cc4e00;
  --orange-12: #582d1d;
  --bronze-1: #fdfcfc;
  --bronze-2: #fdf7f5;
  --bronze-3: #f6edea;
  --bronze-4: #efe4df;
  --bronze-5: #e7d9d3;
  --bronze-6: #dfcdc5;
  --bronze-7: #d3bcb3;
  --bronze-8: #c2a499;
  --bronze-9: #a18072;
  --bronze-10: #957468;
  --bronze-11: #7d5e54;
  --bronze-12: #43302b;
  --gold-1: #fdfdfc;
  --gold-2: #faf9f2;
  --gold-3: #f2f0e7;
  --gold-4: #eae6db;
  --gold-5: #e1dccf;
  --gold-6: #d8d0bf;
  --gold-7: #cbc0aa;
  --gold-8: #b9a88d;
  --gold-9: #978365;
  --gold-10: #8c7a5e;
  --gold-11: #71624b;
  --gold-12: #3b352b;
  --green-1: #fbfefc;
  --green-2: #f4fbf6;
  --green-3: #e6f6eb;
  --green-4: #d6f1df;
  --green-5: #c4e8d1;
  --green-6: #adddc0;
  --green-7: #8eceaa;
  --green-8: #5bb98b;
  --green-9: #30a46c;
  --green-10: #2b9a66;
  --green-11: #218358;
  --green-12: #193b2d;
  --sand-1: #fdfdfcff;
  --sand-2: #f9f9f8ff;
  --sand-3: #f1f0efff;
  --sand-4: #e9e8e6ff;
  --sand-5: #e2e1deff;
  --sand-6: #dad9d6ff;
  --sand-7: #cfcecaff;
  --sand-8: #bcbbb5ff;
  --sand-9: #8d8d86ff;
  --sand-10: #82827cff;
  --sand-11: #63635eff;
  --sand-12: #21201cff;
  --indigo-1: #fdfdfeff;
  --indigo-2: #f7f9ffff;
  --indigo-3: #edf2feff;
  --indigo-4: #e1e9ffff;
  --indigo-5: #d2deffff;
  --indigo-6: #c1d0ffff;
  --indigo-7: #abbdf9ff;
  --indigo-8: #8da4efff;
  --indigo-9: #3e63ddff;
  --indigo-10: #3358d4ff;
  --indigo-11: #3a5bc7ff;
  --indigo-12: #1f2d5cff;
  --jade-1: #fbfefdff;
  --jade-2: #f4fbf7ff;
  --jade-3: #e6f7edff;
  --jade-4: #d6f1e3ff;
  --jade-5: #c3e9d7ff;
  --jade-6: #acdec8ff;
  --jade-7: #8bceb6ff;
  --jade-8: #56ba9fff;
  --jade-9: #29a383ff;
  --jade-10: #26997bff;
  --jade-11: #208368ff;
  --jade-12: #1d3b31ff;
  --violet-1: #fdfcfeff;
  --violet-2: #faf8ffff;
  --violet-3: #f4f0feff;
  --violet-4: #ebe4ffff;
  --violet-5: #e1d9ffff;
  --violet-6: #d4cafeff;
  --violet-7: #c2b5f5ff;
  --violet-8: #aa99ecff;
  --violet-9: #6e56cfff;
  --violet-10: #654dc4ff;
  --violet-11: #6550b9ff;
  --violet-12: #2f265fff;
  --plum-1: #fefcffff;
  --plum-2: #fdf7fdff;
  --plum-3: #fbebfbff;
  --plum-4: #f7def8ff;
  --plum-5: #f2d1f3ff;
  --plum-6: #e9c2ecff;
  --plum-7: #deade3ff;
  --plum-8: #cf91d8ff;
  --plum-9: #ab4abaff;
  --plum-10: #a144afff;
  --plum-11: #953ea3ff;
  --plum-12: #53195dff;
  --olive-1: #fcfdfcff;
  --olive-2: #f8faf8ff;
  --olive-3: #eff1efff;
  --olive-4: #e7e9e7ff;
  --olive-5: #dfe2dfff;
  --olive-6: #d7dad7ff;
  --olive-7: #cccfccff;
  --olive-8: #b9bcb8ff;
  --olive-9: #898e87ff;
  --olive-10: #7f847dff;
  --olive-11: #60655fff;
  --olive-12: #1d211cff;
  --tomato-1: #fffcfcff;
  --tomato-2: #fff8f7ff;
  --tomato-3: #feebe7ff;
  --tomato-4: #ffdcd3ff;
  --tomato-5: #ffcdc2ff;
  --tomato-6: #fdbdafff;
  --tomato-7: #f5a898ff;
  --tomato-8: #ec8e7bff;
  --tomato-9: #e54d2eff;
  --tomato-10: #dd4425ff;
  --tomato-11: #d13415ff;
  --tomato-12: #5c271fff;
  --ruby-1: #fffcfdff;
  --ruby-2: #fff7f8ff;
  --ruby-3: #feeaedff;
  --ruby-4: #ffdce1ff;
  --ruby-5: #ffced6ff;
  --ruby-6: #f8bfc8ff;
  --ruby-7: #efacb8ff;
  --ruby-8: #e592a3ff;
  --ruby-9: #e54666ff;
  --ruby-10: #dc3b5dff;
  --ruby-11: #ca244dff;
  --ruby-12: #64172bff;
  --crimson-1: #fffcfdff;
  --crimson-2: #fef7f9ff;
  --crimson-3: #ffe9f0ff;
  --crimson-4: #fedce7ff;
  --crimson-5: #faceddff;
  --crimson-6: #f3bed1ff;
  --crimson-7: #eaacc3ff;
  --crimson-8: #e093b2ff;
  --crimson-9: #e93d82ff;
  --crimson-10: #df3478ff;
  --crimson-11: #cb1d63ff;
  --crimson-12: #621639ff;
  --pink-1: #fffcfeff;
  --pink-2: #fef7fbff;
  --pink-3: #fee9f5ff;
  --pink-4: #fbdcefff;
  --pink-5: #f6cee7ff;
  --pink-6: #efbfddff;
  --pink-7: #e7acd0ff;
  --pink-8: #dd93c2ff;
  --pink-9: #d6409fff;
  --pink-10: #cf3897ff;
  --pink-11: #c2298aff;
  --pink-12: #651249ff;
  --purple-1: #fefcfeff;
  --purple-2: #fbf7feff;
  --purple-3: #f7edfeff;
  --purple-4: #f2e2fcff;
  --purple-5: #ead5f9ff;
  --purple-6: #e0c4f4ff;
  --purple-7: #d1afecff;
  --purple-8: #be93e4ff;
  --purple-9: #8e4ec6ff;
  --purple-10: #8347b9ff;
  --purple-11: #8145b5ff;
  --purple-12: #402060ff;
  --cyan-1: #fafdfeff;
  --cyan-2: #f2fafbff;
  --cyan-3: #def7f9ff;
  --cyan-4: #caf1f6ff;
  --cyan-5: #b5e9f0ff;
  --cyan-6: #9ddde7ff;
  --cyan-7: #7dcedcff;
  --cyan-8: #3db9cfff;
  --cyan-9: #00a2c7ff;
  --cyan-10: #0797b9ff;
  --cyan-11: #107d98ff;
  --cyan-12: #0d3c48ff;
  --teal-1: #fafefdff;
  --teal-2: #f3fbf9ff;
  --teal-3: #e0f8f3ff;
  --teal-4: #ccf3eaff;
  --teal-5: #b8eae0ff;
  --teal-6: #a1ded2ff;
  --teal-7: #83cdc1ff;
  --teal-8: #53b9abff;
  --teal-9: #12a594ff;
  --teal-10: #0d9b8aff;
  --teal-11: #008573ff;
  --teal-12: #0d3d38ff;
  --grass-1: #fbfefbff;
  --grass-2: #f5fbf5ff;
  --grass-3: #e9f6e9ff;
  --grass-4: #daf1dbff;
  --grass-5: #c9e8caff;
  --grass-6: #b2ddb5ff;
  --grass-7: #94ce9aff;
  --grass-8: #65ba74ff;
  --grass-9: #46a758ff;
  --grass-10: #3e9b4fff;
  --grass-11: #2a7e3bff;
  --grass-12: #203c25ff;
  --brown-1: #fefdfcff;
  --brown-2: #fcf9f6ff;
  --brown-3: #f6eee7ff;
  --brown-4: #f0e4d9ff;
  --brown-5: #ebdacaff;
  --brown-6: #e4cdb7ff;
  --brown-7: #dcbc9fff;
  --brown-8: #cea37eff;
  --brown-9: #ad7f58ff;
  --brown-10: #a07553ff;
  --brown-11: #815e46ff;
  --brown-12: #3e332eff;
  --sky-1: #f9feffff;
  --sky-2: #f1fafdff;
  --sky-3: #e1f6fdff;
  --sky-4: #d1f0faff;
  --sky-5: #bee7f5ff;
  --sky-6: #a9daedff;
  --sky-7: #8dcae3ff;
  --sky-8: #60b3d7ff;
  --sky-9: #7ce2feff;
  --sky-10: #74daf8ff;
  --sky-11: #00749eff;
  --sky-12: #1d3e56ff;
  --mint-1: #f9fefdff;
  --mint-2: #f2fbf9ff;
  --mint-3: #ddf9f2ff;
  --mint-4: #c8f4e9ff;
  --mint-5: #b3ecdeff;
  --mint-6: #9ce0d0ff;
  --mint-7: #7ecfbdff;
  --mint-8: #4cbba5ff;
  --mint-9: #86ead4ff;
  --mint-10: #7de0cbff;
  --mint-11: #027864ff;
  --mint-12: #16433cff;
  --lime-1: #fcfdfaff;
  --lime-2: #f8faf3ff;
  --lime-3: #eef6d6ff;
  --lime-4: #e2f0bdff;
  --lime-5: #d3e7a6ff;
  --lime-6: #c2da91ff;
  --lime-7: #abc978ff;
  --lime-8: #8db654ff;
  --lime-9: #bdee63ff;
  --lime-10: #b0e64cff;
  --lime-11: #5c7c2fff;
  --lime-12: #37401cff;

  /* Border Radius */
  --border-radius--0px: 0px;
  --border-radius--0-125rem: 2px;
  --border-radius--0-25rem: 4px;
  --border-radius--0-375rem: 6px;
  --border-radius--0-5rem: 8px;
  --border-radius--0-75rem: 12px;
  --border-radius--1rem: 16px;
  --border-radius--1-5rem: 24px;
  --border-radius--9999px: 9999px;

  /* Gap Sizes */
  --gap--0px: 0px;
  --gap--1px: 1px;
  --gap--0-125rem: 2px;
  --gap--0-25rem: 4px;
  --gap--0-375rem: 6px;
  --gap--0-5rem: 8px;
  --gap--0-625rem: 10px;
  --gap--0-75rem: 12px;
  --gap--0-875rem: 14px;
  --gap--1rem: 16px;
  --gap--1-25rem: 20px;
  --gap--1-5rem: 24px;
  --gap--1-75rem: 28px;
  --gap--2rem: 32px;
  --gap--2-25rem: 36px;
  --gap--2-5rem: 40px;
  --gap--2-75rem: 44px;
  --gap--3rem: 48px;
  --gap--3-5rem: 56px;
  --gap--4rem: 64px;
  --gap--5rem: 80px;
  --gap--6rem: 96px;
  --gap--7rem: 112px;
  --gap--8rem: 128px;
  --gap--9rem: 144px;
  --gap--10rem: 160px;
  --gap--11rem: 176px;
  --gap--12rem: 192px;
  --gap--13rem: 208px;
  --gap--14rem: 224px;
  --gap--15rem: 224px;
  --gap--16rem: 256px;
  --gap--18rem: 288px;
  --gap--20rem: 320px;
  --gap--24rem: 384px;

  /* Backdrop Filter */
  --backdrop-filter--blur-0-: 0px;
  --backdrop-filter--blur-4px-: 4px;
  --backdrop-filter--blur-8px-: 8px;
  --backdrop-filter--blur-12px-: 12px;
  --backdrop-filter--blur-16px-: 16px;
  --backdrop-filter--blur-24px-: 24px;
  --backdrop-filter--blur-40px-: 40px;
  --backdrop-filter--blur-64px-: 64px;

  /* Shadow Colors */
  --shadow-1: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  --shadow-2: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  --shadow-3: 0px 8px 16px 0px rgba(0, 0, 0, 0.12);
  --shadow-4: 0 3px 4px 0 rgba(0, 0, 0, 0.04);

  /* Stroke sizes */
  --stroke-l: 2;
  --stroke-m: 1.399999976158142px;
  --stroke-s: 1px;

  /* Card background gradient */
  --card-normal: linear-gradient(
    180deg,
    var(--lum-01) -240%,
    var(--lum-02, #232b30) 160%
  );
  --card-hover: linear-gradient(
    180deg,
    var(--lum-01) -80%,
    var(--lum-03) 100%
  );
  --card-gradient: radial-gradient(135% 96% at 49.96% 100%, var(--lum-02, #232B30) -140%, var(--white-a1, rgba(0, 0, 0, 0.05)) 100%), linear-gradient(180deg, var(--lum-02, rgba(35, 43, 48, 0.20)) -120%, var(--lum-01, rgba(15, 17, 18, 0.20)) 100%);
  --card-gradient2: radial-gradient(135% 96% at 49.96% 100%, var(--lum-03, #232B30) -140%, var(--white-a2, rgba(0, 0, 0, 0.05)) 100%), linear-gradient(180deg, var(--lum-03, rgba(35, 43, 48, 0.20)) -120%, var(--lum-02, rgba(15, 17, 18, 0.20)) 100%);

  --radius-button: var(--border-radius--0-5rem);
  --radius-card: var(--border-radius--0-5rem);
  --radius-input: var(--border-radius--0-375rem);
  --sidebar: var(--side-bar-background);
  --sidebar-foreground: var(--side-bar-foreground);
  --sidebar-primary: var(--side-bar-primary);
  --sidebar-primary-foreground: var(
    --side-bar-primary-foreground
  );
  --sidebar-accent: var(--black-a1);
  --sidebar-accent-foreground: var(
    --side-bar-accent-foreground
  );
  --sidebar-border: var(--side-bar-border);
  --sidebar-ring: var(--side-bar-ring);

  /* Custom LIGHT from new design system */
  --var---background-: var(--lum-01);
  --var---foreground-: var(--slate-950);
  --var---muted-: var(--slate-100);
  --var---muted-foreground-: var(--slate-500);
  --var---card-: var(--slate-base-white);
  --var---card-foreground-: var(--slate-950);
  --var---popover-: var(--lum-01);
  --var---popover-foreground-: var(--lum-12);
  --var---border-: var(--black-a1);
  --var---input-: var(--slate-200);
  --var---primary-: var(--slate-900);
  --var---primary-foreground-: var(--slate-50);
  --var---secondary-: var(--slate-100);
  --var---secondary-foreground-: var(--slate-700);
  --var---accent-: var(--black-a1);
  --var---accent-foreground-: var(--slate-700);
  --var---destructive-foreground-: var(--slate-50);
  --var---focus-: var(--slate-500);
  --var---radius-: var(--border-radius--0-5rem);
  --calc-var---radius----2px-: var(--border-radius--0-25rem);
  --calc-var---radius----4px-: var(--border-radius--0-125rem);
  --hover: primary: var(--black-a1);
  --var---destructive-: var(--red-9);
  --primary-button-bg: var(--iris-9);
  --primary-button-bg-hover: var(--iris-10);
  --primary-button-fg: var(--side-bar-hold-white);
  --chart-1: var(--green-8);
  --chart-2: var(--red-8);
  --chart-3: var(--iris-8);
  --chart-1-hover: var(--green-8);
  --chart-2-hover: var(--red-8);
  --side-bar-background: var(--gray-1);
  --side-bar-foreground: var(--slate-7);
  --side-bar-muted-foreground-70: #33415580;
  --side-bar-primary: var(--primary);
  --side-bar-primary-foreground: var(--slate-50);
  --side-bar-accent: var(--black-a1);
  --side-bar-accent-foreground: var(--black-a3);
  --side-bar-border: var(--black-a1);
  --side-bar-ring: var(--slate-500);
  --side-bar-outline: var(--lum-01);
  --side-bar-hold-white: #ffffff;

  /* Theme color mappings for light mode */
  --background: var(--var---background-);
  --foreground: var(--var---foreground-);
  --card: var(--var---card-);
  --card-foreground: var(--var---card-foreground-);
  --popover: var(--var---popover-);
  --popover-foreground: var(--var---popover-foreground-);
  --primary: var(--var---primary-);
  --primary-foreground: var(--var---primary-foreground-);
  --secondary: var(--var---secondary-);
  --secondary-foreground: var(--var---secondary-foreground-);
  --muted: var(--var---muted-);
  --muted-foreground: var(--var---muted-foreground-);
  --accent: var(--var---accent-);
  --accent-foreground: var(--var---accent-foreground-);
  --destructive: var(--var---destructive-);
  --destructive-foreground: var(
    --var---destructive-foreground-
  );
  --border: var(--var---border-);
  --input: var(--var---input-);
  --ring: var(--var---focus-);
}

.dark {
  --slate-50: #f8fafcff;
  --slate-100: #f1f5f9ff;
  --slate-200: #e2e8f0ff;
  --slate-300: #cbd5e1ff;
  --slate-400: #94a3b8ff;
  --slate-500: #64748bff;
  --slate-600: #475569ff;
  --slate-700: #334155ff;
  --slate-800: #1e293bff;
  --slate-900: #0f172aff;
  --slate-950: #020617ff;

  /* Luminance Colors for Dark Mode */
  --lum-01: #0f1112;
  --lum-02: #232b30;
  --lum-03: #293336;
  --lum-04: #303d40;
  --lum-05: #3b4c4f;
  --lum-06: #4e6469;
  --lum-07: #5a7378;
  --lum-08: #6b898f;
  --lum-09: #9dbec4;
  --lum-10: #dceff5;
  --lum-11: #e6f5fa;
  --lum-12: #f2fafc;

  /* Alpha Colors Reversed */
  --white-a1: #0000000d;
  --white-a2: #0000001a;
  --white-a3: #00000026;
  --white-a4: #00000033;
  --white-a5: #0000004d;
  --white-a6: #00000066;
  --white-a7: #00000080;
  --white-a8: #00000099;
  --white-a9: #000000b2;
  --white-a10: #000000cc;
  --white-a11: #000000e5;
  --white-a12: #000000f2;

  --black-a1: #ffffff0d;
  --black-a2: #ffffff1a;
  --black-a3: #ffffff26;
  --black-a4: #ffffff33;
  --black-a5: #ffffff4d;
  --black-a6: #ffffff66;
  --black-a7: #ffffff80;
  --black-a8: #ffffff99;
  --black-a9: #ffffffb2;
  --black-a10: #ffffffcc;
  --black-a11: #ffffffe5;
  --black-a12: #fffffff2;

  /* Gray Colors */
  --gray-1: #111111;
  --gray-2: #191919;
  --gray-3: #222222;
  --gray-4: #2a2a2a;
  --gray-5: #313131;
  --gray-6: #3a3a3a;
  --gray-7: #484848;
  --gray-8: #606060;
  --gray-9: #7a7a7a;
  --gray-10: #8f8f8f;
  --gray-11: #b8b8b8;
  --gray-12: #eeeeee;

  /* Dark Mode Color Scales */
  --slate-1: #111113ff;
  --slate-2: #111113ff;
  --slate-3: #111113ff;
  --slate-4: #272a2dff;
  --slate-5: #2e3135ff;
  --slate-6: #363a3fff;
  --slate-7: #43484eff;
  --slate-8: #5a6169ff;
  --slate-9: #696e77ff;
  --slate-10: #777b84ff;
  --slate-11: #afb3baff;
  --slate-12: #edeef0ff;
  --red-1: #191111;
  --red-2: #201314;
  --red-3: #3b1219;
  --red-4: #500f1c;
  --red-5: #611623;
  --red-6: #72232d;
  --red-7: #8c333a;
  --red-8: #b54548;
  --red-9: #e5484d;
  --red-10: #ec5d5e;
  --red-11: #ff9592;
  --red-12: #ffd1d9;
  --blue-1: #0d1520;
  --blue-2: #111927;
  --blue-3: #0d2847;
  --blue-4: #003362;
  --blue-5: #004074;
  --blue-6: #104d87;
  --blue-7: #205d9e;
  --blue-8: #2870bd;
  --blue-9: #0090ff;
  --blue-10: #3b9eff;
  --blue-11: #70b8ff;
  --blue-12: #c2e6ff;
  --iris-1: #13131e;
  --iris-2: #171625;
  --iris-3: #202248;
  --iris-4: #262a65;
  --iris-5: #303374;
  --iris-6: #3d3e82;
  --iris-7: #4a4a95;
  --iris-8: #5958b1;
  --iris-9: #5b5bd6;
  --iris-10: #6e6ade;
  --iris-11: #b1a9ff;
  --iris-12: #e0dffe;
  --sand-1: #111110ff;
  --sand-2: #191918ff;
  --sand-3: #222221ff;
  --sand-4: #2a2a28ff;
  --sand-5: #31312eff;
  --sand-6: #3b3a37ff;
  --sand-7: #494844ff;
  --sand-8: #62605bff;
  --sand-9: #6f6d66ff;
  --sand-10: #7c7a73ff;
  --sand-11: #b4b2acff;
  --sand-12: #eeeeecff;
  --jade-1: #0d1512ff;
  --jade-2: #121c18ff;
  --jade-3: #0f2e22ff;
  --jade-4: #0b3b2cff;
  --jade-5: #114837ff;
  --jade-6: #1b5745ff;
  --jade-7: #246854ff;
  --jade-8: #2a7e68ff;
  --jade-9: #29a383ff;
  --jade-10: #27b08bff;
  --jade-11: #1fd8a4ff;
  --jade-12: #adf0d4ff;
  --violet-1: #14121fff;
  --violet-2: #1b1525ff;
  --violet-3: #291f44ff;
  --violet-4: #33255bff;
  --violet-5: #3c2e69ff;
  --violet-6: #473876ff;
  --violet-7: #56468bff;
  --violet-8: #6958adff;
  --violet-9: #6e56cfff;
  --violet-10: #7d66d9ff;
  --violet-11: #baa7ffff;
  --violet-12: #e2ddfeff;
  --indigo-1: #11131fff;
  --indigo-2: #141726ff;
  --indigo-3: #182449ff;
  --indigo-4: #1d2e62ff;
  --indigo-5: #253974ff;
  --indigo-6: #304384ff;
  --indigo-7: #3a4f97ff;
  --indigo-8: #435db1ff;
  --indigo-9: #3e63ddff;
  --indigo-10: #5472e4ff;
  --indigo-11: #9eb1ffff;
  --indigo-12: #d6e1ffff;
  --plum-1: #181118ff;
  --plum-2: #201320ff;
  --plum-3: #351a35ff;
  --plum-4: #451d47ff;
  --plum-5: #512454ff;
  --plum-6: #5e3061ff;
  --plum-7: #734079ff;
  --plum-8: #92549cff;
  --plum-9: #ab4abaff;
  --plum-10: #b658c4ff;
  --plum-11: #e796f3ff;
  --plum-12: #f4d4f4ff;
  --sage-1: #101211ff;
  --sage-2: #171918ff;
  --sage-3: #202221ff;
  --sage-4: #272a29ff;
  --sage-5: #2e3130ff;
  --sage-6: #373b39ff;
  --sage-7: #444947ff;
  --sage-8: #5b625fff;
  --sage-9: #63706bff;
  --sage-10: #717d78ff;
  --sage-11: #acb4b0ff;
  --sage-12: #eceeedff;
  --mauve-1: #121113ff;
  --mauve-2: #1a191bff;
  --mauve-3: #232225ff;
  --mauve-4: #2b292dff;
  --mauve-5: #323035ff;
  --mauve-6: #3c393fff;
  --mauve-7: #49474eff;
  --mauve-8: #625f69ff;
  --mauve-9: #6f6d78ff;
  --mauve-10: #7c7a85ff;
  --mauve-11: #b5b2bcff;
  --mauve-12: #eeeef0ff;
  --amber-1: #16120cff;
  --amber-2: #1c1812ff;
  --amber-3: #302008ff;
  --amber-4: #3e2700ff;
  --amber-5: #4c3000ff;
  --amber-6: #5b3d06ff;
  --amber-7: #704f1aff;
  --amber-8: #8f6424ff;
  --amber-9: #ffc53dff;
  --amber-10: #ffd60aff;
  --amber-11: #ffca16ff;
  --amber-12: #ffe7b3ff;
  --orange-1: #17120eff;
  --orange-2: #1c1712ff;
  --orange-3: #331e0bff;
  --orange-4: #462000ff;
  --orange-5: #562800ff;
  --orange-6: #66350eff;
  --orange-7: #7e451eff;
  --orange-8: #a35829ff;
  --orange-9: #f76b15ff;
  --orange-10: #ff801fff;
  --orange-11: #ffa057ff;
  --orange-12: #ffe0c2ff;
  --gold-1: #121211ff;
  --gold-2: #1b1a17ff;
  --gold-3: #24231fff;
  --gold-4: #2d2b26ff;
  --gold-5: #38352eff;
  --gold-6: #444039ff;
  --gold-7: #544f46ff;
  --gold-8: #696256ff;
  --gold-9: #978365ff;
  --gold-10: #a39073ff;
  --gold-11: #cbb99fff;
  --gold-12: #e8e2d9ff;
  --green-1: #0e1512ff;
  --green-2: #121b17ff;
  --green-3: #132d21ff;
  --green-4: #113b29ff;
  --green-5: #174933ff;
  --green-6: #20573eff;
  --green-7: #28684aff;
  --green-8: #2f7c57ff;
  --green-9: #30a46cff;
  --green-10: #33b074ff;
  --green-11: #3dd68cff;
  --green-12: #b1f1cbff;
  --olive-1: #111210ff;
  --olive-2: #181917ff;
  --olive-3: #212220ff;
  --olive-4: #282a27ff;
  --olive-5: #2f312eff;
  --olive-6: #383a36ff;
  --olive-7: #454843ff;
  --olive-8: #5c625bff;
  --olive-9: #687066ff;
  --olive-10: #767d74ff;
  --olive-11: #afb5adff;
  --olive-12: #eceeecff;
  --tomato-1: #181111ff;
  --tomato-2: #1f1513ff;
  --tomato-3: #391714ff;
  --tomato-4: #4e1511ff;
  --tomato-5: #5e1c16ff;
  --tomato-6: #6e2920ff;
  --tomato-7: #853a2dff;
  --tomato-8: #ac4d39ff;
  --tomato-9: #e54d2eff;
  --tomato-10: #ec6142ff;
  --tomato-11: #ff977dff;
  --tomato-12: #fbd3cbff;
  --ruby-1: #191113ff;
  --ruby-2: #1e1517ff;
  --ruby-3: #3a141eff;
  --ruby-4: #4e1326ff;
  --ruby-5: #5e192eff;
  --ruby-6: #6f2539ff;
  --ruby-7: #883447ff;
  --ruby-8: #b3445aff;
  --ruby-9: #e54666ff;
  --ruby-10: #ec5a72ff;
  --ruby-11: #ff949dff;
  --ruby-12: #fed2e1ff;
  --crimson-1: #191114ff;
  --crimson-2: #201318ff;
  --crimson-3: #381525ff;
  --crimson-4: #4d122fff;
  --crimson-5: #5c1839ff;
  --crimson-6: #6d2545ff;
  --crimson-7: #873356ff;
  --crimson-8: #b0436eff;
  --crimson-9: #e93d82ff;
  --crimson-10: #ee518aff;
  --crimson-11: #ff92adff;
  --crimson-12: #fdd3e8ff;
  --pink-1: #191117ff;
  --pink-2: #21121dff;
  --pink-3: #37172fff;
  --pink-4: #4b143dff;
  --pink-5: #591c47ff;
  --pink-6: #692955ff;
  --pink-7: #833869ff;
  --pink-8: #a84885ff;
  --pink-9: #d6409fff;
  --pink-10: #de51a8ff;
  --pink-11: #ff8dccff;
  --pink-12: #fdd1eaff;
  --purple-1: #18111bff;
  --purple-2: #1e1423ff;
  --purple-3: #301c3bff;
  --purple-4: #3d224eff;
  --purple-5: #47295cff;
  --purple-6: #54336bff;
  --purple-7: #664282ff;
  --purple-8: #8457aaff;
  --purple-9: #8e4ec6ff;
  --purple-10: #9a5cd0ff;
  --purple-11: #d19dffff;
  --purple-12: #ecd9faff;
  --cyan-1: #0b161aff;
  --cyan-2: #111b1fff;
  --cyan-3: #082c36ff;
  --cyan-4: #003848ff;
  --cyan-5: #004557ff;
  --cyan-6: #065468ff;
  --cyan-7: #13677eff;
  --cyan-8: #11809cff;
  --cyan-9: #00a2c7ff;
  --cyan-10: #23afd0ff;
  --cyan-11: #4ccce6ff;
  --cyan-12: #b6ecf7ff;
  --teal-1: #0d1514ff;
  --teal-2: #121c1bff;
  --teal-3: #0d2d2aff;
  --teal-4: #043b35ff;
  --teal-5: #0b4841ff;
  --teal-6: #16574fff;
  --teal-7: #1d6960ff;
  --teal-8: #207e73ff;
  --teal-9: #12a594ff;
  --teal-10: #0eb39eff;
  --teal-11: #0bd8b6ff;
  --teal-12: #adf0ddff;
  --grass-1: #0e1511ff;
  --grass-2: #151a16ff;
  --grass-3: #1b2a1eff;
  --grass-4: #1e3a25ff;
  --grass-5: #25482eff;
  --grass-6: #2d5737ff;
  --grass-7: #366740ff;
  --grass-8: #3e7949ff;
  --grass-9: #46a758ff;
  --grass-10: #53b365ff;
  --grass-11: #71d083ff;
  --grass-12: #c2f0c2ff;
  --bronze-1: #141110ff;
  --bronze-2: #1c1917ff;
  --bronze-3: #262220ff;
  --bronze-4: #302a27ff;
  --bronze-5: #3b3330ff;
  --bronze-6: #493e3aff;
  --bronze-7: #5a4c47ff;
  --bronze-8: #6f5f58ff;
  --bronze-9: #a18072ff;
  --bronze-10: #ae8c7eff;
  --bronze-11: #d4b3a5ff;
  --bronze-12: #ede0d9ff;
  --brown-1: #12110fff;
  --brown-2: #1c1816ff;
  --brown-3: #28211dff;
  --brown-4: #322922ff;
  --brown-5: #3e3128ff;
  --brown-6: #4d3c2fff;
  --brown-7: #614a39ff;
  --brown-8: #7c5f46ff;
  --brown-9: #ad7f58ff;
  --brown-10: #b88c67ff;
  --brown-11: #dbb594ff;
  --brown-12: #f2e1caff;
  --sky-1: #0d141fff;
  --sky-2: #121a26ff;
  --sky-3: #12283eff;
  --sky-4: #123553ff;
  --sky-5: #154366ff;
  --sky-6: #1b537aff;
  --sky-7: #1f6691ff;
  --sky-8: #197caeff;
  --sky-9: #7ce2feff;
  --sky-10: #a8eeffff;
  --sky-11: #75c7f0ff;
  --sky-12: #c2f3ffff;
  --mint-1: #0e1515ff;
  --mint-2: #131c1cff;
  --mint-3: #092c2bff;
  --mint-4: #003b38ff;
  --mint-5: #044843ff;
  --mint-6: #14574fff;
  --mint-7: #20695fff;
  --mint-8: #277f70ff;
  --mint-9: #86ead4ff;
  --mint-10: #a8f5e5ff;
  --mint-11: #58d5baff;
  --mint-12: #c4f5e1ff;
  --lime-1: #111304ff;
  --lime-2: #161913ff;
  --lime-3: #202919ff;
  --lime-4: #2a371fff;
  --lime-5: #334424ff;
  --lime-6: #3e522bff;
  --lime-7: #496231ff;
  --lime-8: #577538ff;
  --lime-9: #bdee63ff;
  --lime-10: #d4ff70ff;
  --lime-11: #bde56cff;
  --lime-12: #e3f7baff;

  /* Shadow Colors */
  --shadow-1: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  --shadow-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);

  /* Card background gradient */
  --card-normal: linear-gradient(
    180deg,
    var(--lum-02, #232b30) 0%,
    var(--lum-02, #232b30) 106.49%
  );

  /* Theme colors - maintained from existing (now referencing new design system) */
  --background: var(--var---background-);
  --foreground: var(--var---foreground-);
  --card: var(--var---card-);
  --card-foreground: var(--var---card-foreground-);
  --popover: var(--var---popover-);
  --popover-foreground: var(--var---popover-foreground-);
  --primary: var(--var---primary-);
  --primary-foreground: var(--var---primary-foreground-);
  --secondary: var(--var---secondary-);
  --secondary-foreground: var(--var---secondary-foreground-);
  --muted: var(--var---muted-);
  --muted-foreground: var(--var---muted-foreground-);
  --accent: var(--var---accent-);
  --accent-foreground: var(--var---accent-foreground-);
  --destructive: var(--var---destructive-);
  --destructive-foreground: var(
    --var---destructive-foreground-
  );
  --border: var(--var---border-);
  --input: var(--var---input-);
  --input-background: var(--var---input-);
  --ring: var(--var---focus-);
  --chart-1: var(--green-10);
  --chart-2: var(--red-10);
  --chart-3: var(--iris-10);
  --chart-4: var(--blue-9);
  --chart-5: var(--orange-9);
  --sidebar: var(--side-bar-background);
  --sidebar-foreground: var(--side-bar-foreground);
  --sidebar-primary: var(--side-bar-primary);
  --sidebar-primary-foreground: var(
    --side-bar-primary-foreground
  );
  --sidebar-accent: var(--side-bar-accent);
  --sidebar-accent-foreground: var(
    --side-bar-accent-foreground
  );
  --sidebar-border: var(--side-bar-border);
  --sidebar-ring: var(--side-bar-ring);

  /* Custom DARK from new design system */
  --var---background-: var(--slate-950);
  --var---foreground-: var(--slate-50);
  --var---muted-: var(--slate-800);
  --var---muted-foreground-: var(--slate-400);
  --var---card-: var(--slate-950);
  --var---card-foreground-: var(--slate-50);
  --var---popover-: var(--slate-950);
  --var---popover-foreground-: var(--slate-50);
  --var---border-: var(--black-a1);
  --var---input-: var(--slate-700);
  --var---primary-: var(--slate-100);
  --var---primary-foreground-: var(--slate-900);
  --var---secondary-: var(--slate-800);
  --var---secondary-foreground-: var(--slate-50);
  --var---accent-: var(--black-a1);
  --var---accent-foreground-: var(--slate-50);
  --var---destructive-foreground-: var(--slate-50);
  --var---focus-: var(--slate-400);
  --var---radius-: var(--border-radius--0-5rem);
  --calc-var---radius----2px-: var(--border-radius--0-25rem);
  --calc-var---radius----4px-: var(--border-radius--0-125rem);
  --hover: primary: var(--slate-100);
  --var---destructive-: var(--red-7);
  --primary-button-bg: var(--iris-9);
  --primary-button-bg-hover: var(--iris-10);
  --primary-button-fg: var(--side-bar-hold-white);
  --chart-1-hover: var(--green-10);
  --chart-2-hover: var(--red-10);
  --side-bar-background: var(--gray-12);
  --side-bar-foreground: var(--slate-1);
  --side-bar-muted-foreground-70: #33415580;
  --side-bar-primary: var(--slate-200);
  --side-bar-primary-foreground: var(--slate-200);
  --side-bar-accent: var(--black-a1);
  --side-bar-accent-foreground: var(--black-a3);
  --side-bar-border: var(--black-a2);
  --side-bar-ring: var(--slate-500);
  --side-bar-outline: var(--black-a2);
  --side-bar-hold-white: #ffffff;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius-input));
  --radius-md: var(--radius);
  --radius-lg: var(--radius-card);
  --radius-xl: calc(var(--radius-card) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(
    --sidebar-primary-foreground
  );
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(
    --sidebar-accent-foreground
  );
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Hide scrollbar on mobile devices */
  @media (max-width: 640px) {
    body,
    html,
    * {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
    }

    body::-webkit-scrollbar,
    html::-webkit-scrollbar,
    *::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }

  /* Minimal scrollbar for content area */
  .content-area-scroll main::-webkit-scrollbar {
    width: 6px;
  }

  .content-area-scroll main::-webkit-scrollbar-track {
    background: transparent;
  }

  .content-area-scroll main::-webkit-scrollbar-thumb {
    background: var(--black-a3);
    border-radius: var(--border-radius--9999px);
  }

  .content-area-scroll main::-webkit-scrollbar-thumb:hover {
    background: var(--black-a4);
  }

  .content-area-scroll main {
    scrollbar-width: thin;
    scrollbar-color: var(--black-a3) transparent;
  }
}

/**
 * Base typography. This is not applied to elements which have an ancestor with a Tailwind text class.
 */
@layer base {
  :where(
    :not(:has([class*=" text-"]), :not(:has([class^="text-"])))
  ) {
    h1 {
      font-family: "Inter", sans-serif;
      font-size: var(--text-4xl);
      font-weight: var(--font-weight-extra-bold);
      line-height: 1.2;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h2 {
      font-family: "Inter", sans-serif;
      font-size: var(--text-3xl);
      font-weight: var(--font-weight-semi-bold);
      line-height: 1.3;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h3 {
      font-family: "Inter", sans-serif;
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-semi-bold);
      line-height: 1.4;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h4 {
      font-family: "Inter", sans-serif;
      font-size: var(--text-xl);
      font-weight: var(--font-weight-semi-bold);
      line-height: 1.4;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

     h5 {
      font-family: "Inter", sans-serif;
      font-size: var(--text-l);
      font-weight: var(--font-weight-semi-bold);
      line-height: 1.4;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    p {
      font-family: "Inter", sans-serif;
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.4;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    label {
      font-family: "Inter", sans-serif;
      font-size: var(--text-s);
      font-weight: var(--font-weight-medium);
      line-height: 1.4;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    button {
      font-family: "Inter", sans-serif;
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input {
      font-family: "Inter", sans-serif;
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
}

html,
body,
:root {
  height: 100%;
  width: 100%;
}

html {
  font-size: var(--font-size);
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Modern scrollbar hiding with better browser support */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Transparent scrollbar track utility */
.scrollbar-track-transparent {
  scrollbar-color: var(--scroll-thumb, rgba(255, 255, 255, 0.4))
    transparent;
}
.scrollbar-track-transparent::-webkit-scrollbar-track {
  background-color: transparent;
}

/* Minimal scrollbar for sidebar */
.minimal-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--black-a2) transparent;
}

.minimal-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.minimal-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.minimal-scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--black-a2);
  border-radius: 3px;
}

.minimal-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: var(--black-a3);
}

/* Hide spinners for number input */
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}`;
