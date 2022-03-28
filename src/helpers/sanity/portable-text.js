import { Link } from "@/components/dom/links";

export const portableText = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return (
            <h1 sx={{ fontSize: 7, ":not(:first-child)": { marginTop: 4 } }}>{props.children}</h1>
          );

        case "h2":
          return (
            <h2 sx={{ fontSize: 6, ":not(:first-child)": { marginTop: 4 } }}>{props.children}</h2>
          );

        case "h3":
          return (
            <h3 sx={{ fontSize: 5, ":not(:first-child)": { marginTop: 4 } }}>{props.children}</h3>
          );

        case "h4":
          return (
            <h4 sx={{ fontSize: 4, ":not(:first-child)": { marginTop: 4 } }}>{props.children}</h4>
          );

        case "h5":
          return (
            <h5 sx={{ fontSize: 3, ":not(:first-child)": { marginTop: 4 } }}>{props.children}</h5>
          );

        case "blockquote":
          return <blockquote>{props.children}</blockquote>;

        case "paragraph":
          return <p>{props.children}</p>;

        case "preamble":
          return <p sx={{ fontSize: "preamble", color: "text.body" }}>{props.children}</p>;

        default:
          return <p>{props.children}</p>;
      }
    },
  },
  marks: {
    link: (props) => {
      return (
        <Link
          sx={{
            color: "text.link",
            ":hover": { opacity: 0.8 },
          }}
          href={props.mark.href}
        >
          {props.children}
        </Link>
      );
    },
  },
};

export default portableText
