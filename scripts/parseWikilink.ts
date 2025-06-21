import { visit } from 'unist-util-visit';
import { findAndReplace } from 'mdast-util-find-and-replace'
import { Plugin } from 'unified';
import { Root, Text, PhrasingContent } from 'mdast';

interface Options {
  resolveLink: (target: string) => string;
}

export const parseWikilink: Plugin<[Options], Root> = ({ resolveLink }) => {
  return (tree) => {
    findAndReplace(tree, [
      [
        /\[\[([^\]]+?)\]\]/g,
        (_, match): PhrasingContent => {
          const [targetRaw, labelRaw] = match.split('|');
          const target = targetRaw.trim().replace(/\.md$/, '');
          const label = (labelRaw ?? targetRaw).trim();
          const slug = resolveLink(target);

          return {
            type: 'link',
            title: label,
            url: slug,
            children: [{ type: 'text', value: label }],
          } as any;
        },
      ],
    ]);
  };
};