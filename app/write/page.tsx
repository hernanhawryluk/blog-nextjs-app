"use client";

import { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { MdAddCircleOutline } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaCheck, FaRegImage } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import Button from "../components/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/libs/firebase";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

const storage = getStorage(app);

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const buttonStyle =
    "flex items-center justify-center border-4 h-[42px] w-[42px] rounded-full border-gray-900 dark:border-gray-50";
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    const upload = () => {
      if (!file) {
        toast.error("Please select a file");
        return;
      }

      const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              toast.error("Storage unauthorized");
              break;
            case "storage/canceled":
              toast.error("Storage canceled");
              break;
            case "storage/unknown":
              toast.error("Oops! Something went wrong!");
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            toast.success("Image uploaded successfully");
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleSubmit = async () => {
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }

    if (catSlug === "") {
      toast.error("Please select a category");
      return;
    }

    if (value === "") {
      toast.error("Please enter a story");
      return;
    }

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });
    toast.success("Post created successfully");
    router.push(`/posts/${slugify(title)}`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  if (!data || data.user.admin !== true) {
    router.push("/");
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row mt-8">
        <div className="flex sm:flex-col">
          <button onClick={() => setOpen(!open)} className="mb-3">
            <MdAddCircleOutline size={52} />
          </button>
          {open && (
            <div className="flex flex-row ml-2 sm:ml-0 sm:flex-col gap-4 sm:gap-2 pl-1 pt-[6px] sm:pt-0">
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  if (e.target.files) {
                    setFile(e.target.files[0]);
                  }
                }}
                className="hidden"
              />
              <label htmlFor="image" className="cursor-pointer">
                <div className={buttonStyle}>
                  {media === "" ? (
                    <FaRegImage size={20} />
                  ) : (
                    <FaCheck size={20} className="text-teal-500" />
                  )}
                </div>
              </label>
              <button className={buttonStyle}>
                <RiExternalLinkLine size={22} />
              </button>
              <button className={buttonStyle}>
                <GoVideo size={20} />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            className="w-full px-1 sm:px-6 py-2 text-3xl font-semibold bg-transparent outline-none placeholder:italic"
          />

          <select
            aria-placeholder="Select category..."
            style={{ fontStyle: catSlug ? "" : "italic" }}
            className={
              "w-fit my-3 sm:ml-7 cursor-pointer bg-transparent text-2xl outline-none placeholder:italic"
            }
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="select">Select a category</option>
            <option value="anime">anime</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
          </select>

          <ReactQuill
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
            className="w-[100%] sm:px-2 min-h-[50vh] font-light sm:text-2xl"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          label="Publish"
          onClick={() => handleSubmit()}
          custom="w-[120px] h-10 mr-8 font-semibold bg-gray-700 text-gray-50 dark:bg-green-700"
        />
      </div>
    </div>
  );
};

export default Write;
