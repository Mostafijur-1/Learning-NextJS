import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-6 bg-green-100">
      <nav>
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href="/blog" aria-label="Go to blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/products" aria-label="Go to products">
              Products
            </Link>
          </li>
          <li>
            <Link href="/docs" aria-label="Go to documentation">
              Docs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
