(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [65],
  {
    84133: function (e, s, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/auth/signin',
        function () {
          return l(87024);
        },
      ]);
    },
    87024: function (e, s, l) {
      'use strict';
      l.r(s),
        l.d(s, {
          default: function () {
            return g;
          },
        });
      var i = l(85893),
        n = l(67294),
        t = l(44681),
        r = l(64810),
        a = l(33299),
        o = l(9008),
        c = l(41664),
        d = l(11163),
        u = l(44304),
        x = l(44180),
        m = l(87825),
        h = l(12197),
        f = l(42624);
      function g() {
        var e,
          s,
          l,
          g,
          j = (0, a.useSession)().data,
          p = (0, d.useRouter)(),
          v = p.query.callbackUrl;
        return (
          (0, n.useEffect)(function () {
            (null === j || void 0 === j ? void 0 : j.user) &&
              ((0, u.B)('home_bypass_sign_in', {
                category: 'Auth',
                label: 'Home Bypass Sign In',
              }),
              v ? p.push(v) : p.push('/app', '/app', { locale: p.locale }));
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              'discord-not-verified' ===
                (null === (e = p.query) || void 0 === e ? void 0 : e.error) &&
                (0, i.jsxs)('div', {
                  className: 'fixed z-[9999] w-full h-full',
                  children: [
                    (0, i.jsxs)('div', {
                      className:
                        'flex absolute flex-col gap-8 p-8 max-w-md bg-darkBlue-900 rounded-xl centerAbs',
                      children: [
                        (0, i.jsxs)('div', {
                          className: 'text-white',
                          children: [
                            (0, i.jsxs)('h2', {
                              className:
                                'flex items-center mb-4 text-2xl font-medium',
                              children: [
                                (0, i.jsx)(h.uy, {
                                  color: '',
                                  className: 'mr-2 text-yellow-500',
                                  height: '30',
                                }),
                                'Sign-in Error:',
                              ],
                            }),
                            'Looks like you tried to access with an unverified Discord account.',
                            (0, i.jsx)('br', {}),
                            (0, i.jsx)('br', {}),
                            'Please go through the',
                            ' ',
                            (0, i.jsx)('a', {
                              href: 'https://support.discord.com/hc/en-us/articles/213219267-Resending-Verification-Email',
                              target: '_blank',
                              rel: 'noreferrer',
                              className:
                                'text-blue-500 underline hover:underline-offset-2',
                              children: 'Discord email verification',
                            }),
                            ' ',
                            'process and try again.',
                          ],
                        }),
                        (0, i.jsx)('button', {
                          className:
                            'box-border flex justify-center items-center py-2 px-3 h-auto font-medium bg-slate-700 hover:bg-slate-800 rounded',
                          onClick: function () {
                            return p.push('/auth/signin', void 0, {
                              shallow: !1,
                            });
                          },
                          children: 'Dismiss',
                        }),
                      ],
                    }),
                    (0, i.jsx)('div', {
                      className:
                        'fixed top-0 left-0 -z-10 w-full h-full bg-darkBlue-500/90',
                    }),
                  ],
                }),
              (null === (s = p.query) || void 0 === s ? void 0 : s.error) &&
                'discord-not-verified' !==
                  (null === (l = p.query) || void 0 === l ? void 0 : l.error) &&
                (0, i.jsxs)('div', {
                  className: 'fixed z-[9999] w-full h-full',
                  children: [
                    (0, i.jsxs)('div', {
                      className:
                        'flex absolute flex-col gap-8 p-8 max-w-md bg-darkBlue-900 rounded-xl centerAbs',
                      children: [
                        (0, i.jsxs)('div', {
                          className: 'text-white',
                          children: [
                            (0, i.jsxs)('h2', {
                              className:
                                'flex items-center mb-4 text-lg font-medium',
                              children: [
                                (0, i.jsx)(h.uy, {
                                  color: '',
                                  className: 'mr-2 text-yellow-500',
                                  height: '24',
                                }),
                                'Sign-in Error:',
                              ],
                            }),
                            (0, i.jsx)('div', {
                              className:
                                'p-2 mt-6 font-mono text-sm text-left text-slate-500 bg-darkBlue-700 rounded-md',
                              children:
                                null === (g = p.query) || void 0 === g
                                  ? void 0
                                  : g.error,
                            }),
                          ],
                        }),
                        (0, i.jsx)('button', {
                          className:
                            'box-border flex justify-center items-center py-2 px-3 h-auto font-medium bg-slate-700 hover:bg-slate-800 rounded',
                          onClick: function () {
                            return p.push('/home', void 0, { shallow: !1 });
                          },
                          children: 'Dismiss',
                        }),
                      ],
                    }),
                    (0, i.jsx)('div', {
                      className:
                        'fixed top-0 left-0 -z-10 w-full h-full bg-darkBlue-500/90',
                    }),
                  ],
                }),
              (0, i.jsxs)('div', {
                className:
                  'overflow-hidden relative z-20 w-screen h-screen h-auto bg-[#060522] .scanlines',
                children: [
                  (0, i.jsx)(o.default, {
                    children: (0, i.jsx)('style', {
                      children:
                        'html {\n            background: #09073a;\n            scrollbar-gutter: unset\n          }',
                    }),
                  }),
                  (0, i.jsx)('main', {
                    className: '',
                    children: (0, i.jsx)('div', {
                      className: 'flex flex-col justify-start items-center',
                      children: (0, i.jsxs)('div', {
                        className: 'relative w-screen h-screen min-h-screen',
                        children: [
                          (0, i.jsxs)('div', {
                            className:
                              'flex absolute flex-col gap-16 justify-center items-center p-4 w-full max-w-3xl sm:p-8 md:px-16 centerAbs',
                            children: [
                              (0, i.jsx)(x.Z, {}),
                              (0, i.jsxs)('div', {
                                className:
                                  'grid flex-col gap-8 min-w-max max-w-max md:grid-cols-2 ',
                                children: [
                                  (0, i.jsx)(c.default, {
                                    href: 'https://discord.gg/midjourney',
                                    passHref: !0,
                                    children: (0, i.jsxs)(f.HomeButton, {
                                      as: 'a',
                                      className:
                                        'py-3 !w-full text-emerald-50 bg-emerald-500/20',
                                      children: [
                                        (0, i.jsx)(t.Z, {
                                          height: 20,
                                          className: 'inline text-emerald-500',
                                        }),
                                        'Join the Beta',
                                      ],
                                    }),
                                  }),
                                  (0, i.jsx)(f.SignInButton, {
                                    className:
                                      'py-3 !w-full text-yellow-50 bg-yellow-500/30 hover:bg-white',
                                    children: function (e) {
                                      var s = e.loading;
                                      return (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          s
                                            ? (0, i.jsx)(h.gb, {
                                                height: 20,
                                                className:
                                                  'inline text-yellow-500 animate-spin',
                                              })
                                            : (0, i.jsx)(r.Z, {
                                                height: 20,
                                                className:
                                                  'inline text-yellow-500',
                                              }),
                                          (0, i.jsx)('span', {
                                            className: '',
                                            children: 'Sign In with Discord',
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                  (0, i.jsx)(c.default, {
                                    href: '/',
                                    children: (0, i.jsxs)('a', {
                                      className:
                                        'absolute inset-x-0 top-full p-4 px-6 w-full min-w-max font-mono text-sm italic text-center hover:underline underline-offset-4 transition-all md:text-base',
                                      children: [
                                        (0, i.jsx)(h.Rc, {
                                          height: 18,
                                          className: 'mr-2',
                                        }),
                                        'Return Home',
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)(m.Z, { num: 0 }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [2624, 9774, 2888, 179], function () {
      return (s = 84133), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
