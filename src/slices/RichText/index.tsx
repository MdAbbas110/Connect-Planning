import Bounded from "@/app/components/Bounded";
import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <Bounded>
      <div className="prose prose-lg prose-slate prose-invert">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
    </Bounded>
  );
}
