import { RouteRecordRaw } from 'vue-router';

export function generateRoutes() {
  const modules = require.context('../pages', true, /\.vue$/);
  const IGNORED = ['ErrorNotFound.vue'];
  return modules
    .keys()
    .filter((item) => !IGNORED.includes(item.split('/').pop() as string))
    .map((key) => {
      const fileNameWithExt = key.split('/').pop() as string;
      const fileName = fileNameWithExt.substring(0, fileNameWithExt.length - 4);
      const path = key.replace('.', '').replace('.vue', '').toLocaleLowerCase();
      const com = modules(key);
      return {
        path,
        title: fileName,
        component: com.default || com,
      };
    });
}
export interface Menu {
  path: string;
  title: string;
  icon: string;
  children?: Menu[];
}
export function generateMenus() {
  const routes = generateRoutes();
  console.log(routes);
  const menus: Menu[] = [];
  for (const { path, title } of routes) {
    const pathArr = path.split('/');
    pathArr.shift();
    if (pathArr.length === 1) {
      menus.push({
        path,
        title,
        icon: 'school',
      });
    } else {
      let parentNode = menus;
      pathArr.forEach((key, index) => {
        const isExist = parentNode.find((item) => item.path === '/' + key);
        if (isExist) {
          parentNode = isExist.children as Menu[];
        } else {
          const node =
            index === pathArr.length - 1
              ? {
                  path,
                  title,
                  icon: 'school',
                }
              : {
                  path: '/' + key,
                  title: key,
                  children: [],
                  icon: 'school',
                };
          parentNode.push(node);
          parentNode = node.children as Menu[];
        }
      });
    }
  }
  return menus;
}

const menus = generateMenus();
console.log(menus);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: generateRoutes(),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

// export interface Menus {
//   path: string;
//   title: string;
//   icon: string;
// }
// type RoutesOrMenus<T> = T extends 'routes' ? RouteRecordRaw : Menus;
// export function generateRoutesOrMenus<T extends 'routes' | 'menus'>(type: T) {
//   const modules = require.context('../pages', true, /\.vue$/);

//   return modules.keys().map((key) => {
//     const fileNameWithExt = key.split('/').pop() as string;
//     const fileName = fileNameWithExt.substring(0, fileNameWithExt.length - 4);
//     const path = key.replace('.', '').replace('.vue', '').toLocaleLowerCase();
//     console.log(path);

//     const com = modules(key);
//     return type === 'routes'
//       ? {
//           path,
//           title: fileName,
//           component: com.default || com,
//         }
//       : ({
//           path,
//           title: fileName,
//           icon: 'school',
//         } as unknown as RoutesOrMenus<T>);
//   });
// }
// // console.log(generateRoutesOrMenus('routes'));

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: generateRoutesOrMenus('routes'),
//   },
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue'),
//   },
// ];

// export default routes;

// export interface Menus {
//   path: string;
//   title: string;
//   icon: string;
// }
// type RoutesOrMenus<T> = T extends 'routes' ? RouteRecordRaw[] : Menus[];
// export function generateRoutesOrMenus<T extends 'routes' | 'menus'>(
//   type: T
// ): RoutesOrMenus<T> {
//   const modules = require.context('../pages', false, /\.vue$/);

//   return modules.keys().map((key) => {
//     const fileNameWithExt = key.split('/').pop() as string;
//     const fileName = fileNameWithExt.substring(0, fileNameWithExt.length - 4);
//     const com = modules(key);
//     return type === 'routes'
//       ? {
//           path: fileName,
//           component: com.default || com,
//         }
//       : ({
//           path: fileName,
//           title: fileName,
//           icon: 'school',
//         } as any);
//   });
// }
// console.log(generateRoutesOrMenus('routes'));

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: generateRoutesOrMenus('routes'),
//   },
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue'),
//   },
// ];

// export default routes;

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '', component: () => import('src/pages/StyleDemo.vue') },
//       { path: 'flex', component: () => import('src/pages/FlexBox.vue') },
//       { path: 'setup', component: () => import('src/pages/SetupCounter.vue') },
//       { path: 'style', component: () => import('src/pages/StyleDemo.vue') },
//       { path: 'icon', component: () => import('src/pages/IconCom.vue') },
//       { path: 'com', component: () => import('src/pages/QuaComs.vue') },
//     ],
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue'),
//   },
// ];

// export default routes;
