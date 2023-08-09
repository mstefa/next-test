// interface Overload {
//   (props: HtmlButtonProps & IconButtonProps): JSX.Element;
//   (props: AnchorProps & IconButtonProps): JSX.Element;
// }

// const hasHref = (props: HtmlButtonProps | AnchorProps): props is AnchorProps => "href" in props;

// export const IconButton: Overload = ({ mode = "light", size = "medium", label, icon, ...props }) => {
//   const iconSize = size === "large" ? "large" : "medium";

//   const componentProps = {
//     className: classNames(styles["icon-btn"], styles[`icon-btn--${mode}`], styles[`icon-btn--${size}`]),
//     "aria-label": label,
//     ...props,
//   };

//   if (hasHref(componentProps)) {
//     return (
//       <NextLink href={componentProps.href}>
//         <a {...componentProps}>
//           <Icon icon={icon} size={iconSize} />
//         </a>
//       </NextLink>
//     );
//   }

//   return (
//     <button {...componentProps}>
//       <Icon icon={icon} size={iconSize} />
//     </button>
//   );
// };
