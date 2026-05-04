import sys

html_content = sys.stdin.read()

# basic string replacements for JSX
replacements = {
    'class=': 'className=',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'fill-opacity': 'fillOpacity',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'srcset': 'srcSet',
    'stroke-miterlimit': 'strokeMiterlimit',
    'clip-path': 'clipPath',
    'mask-l-from-50%': 'mask-l-from-50-pct',
    'mask-r-from-50%': 'mask-r-from-50-pct',
    'style="border-radius: 2rem;"': 'style={{ borderRadius: "2rem" }}',
    'style="transform: translateX(-626px);"': 'style={{ transform: "translateX(-626px)" }}',
    'style="opacity:0.3;transform:scale(0.8)"': 'style={{ opacity: 0.3, transform: "scale(0.8)" }}',
    'style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"': 'style={{ position:"absolute", height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent" }}',
    'style="opacity: 0.3; transform: scale(0.8);"': 'style={{ opacity: 0.3, transform: "scale(0.8)" }}',
    'style="opacity: 1; transform: scale(1.2);"': 'style={{ opacity: 1, transform: "scale(1.2)" }}',
    'style="opacity:0.30000000000000004;transform:scale(0.8)"': 'style={{ opacity: 0.3, transform: "scale(0.8)" }}',
    'style="color:transparent"': 'style={{ color: "transparent" }}',
    'style="display:inline-block;vertical-align:top;text-decoration:inherit;text-wrap:balance"': 'style={{ display: "inline-block", verticalAlign: "top", textDecoration: "inherit", textWrap: "balance" }}',
    'style="opacity: 1; transform: translateY(220px);"': 'style={{ opacity: 1, transform: "translateY(220px)" }}',
    'style="color: transparent;"': 'style={{ color: "transparent" }}',
    '<img ': '<img ',
    '>\n</div>': ' />\n</div>',  # hacky img closing
}

for k, v in replacements.items():
    html_content = html_content.replace(k, v)

# close img and br tags
lines = html_content.split('\n')
for i, line in enumerate(lines):
    if '<img ' in line and '/>' not in line:
        if line.strip().endswith('>'):
            lines[i] = line[::-1].replace('>', '/>', 1)[::-1]

# handle script tag
for i, line in enumerate(lines):
    if '<script>' in line:
        lines[i] = '{/* script removed */}'

print("import React from 'react';")
print("import Navbar from './Navbar';")
print("const Hero: React.FC = () => { return (")
for line in lines:
    print(line)
print("); }; export default Hero;")
